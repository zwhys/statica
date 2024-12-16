import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
  express.json()
);

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Server error");
  }
});

app.post("/username", async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    res.json({ username: user?.username });
  } catch (err) {
    console.error("Error displaying username:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/exercise_types", async (req, res) => {
  try {
    const exerciseTypes = await prisma.exercise_types.findMany();
    res.json(exerciseTypes);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Server error");
  }
});

app.get("/records", async (req, res) => {
  try {
    const userId = parseInt(req.query.userId as string, 10);
    const records = await prisma.records.findMany({
      where: {
        user_id: userId,
        deleted_at: null,
      },
    });
    res.json(records);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Server error");
  }
});

app.post("/add_exercise_entry", async (req, res) => {
  const { user_id, exercise_type, sets, reps, remarks } = req.body;

  const dateOfEntry = new Date(req.body.data_of_entry);
  const validDate = isNaN(dateOfEntry.getTime())
    ? new Date().toISOString()
    : dateOfEntry.toISOString();
  try {
    await prisma.records.create({
      data: {
        user_id,
        date_of_entry: validDate,
        exercise_type,
        sets: parseInt(sets, 10),
        reps: parseInt(reps, 10),
        remarks,
      },
    });
    res.send("Exercise entry added successfully");
  } catch (err) {
    console.error("Error saving exercise entry:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/update_exercise_entry", async (req, res) => {
  const { id, exercise_type, sets, reps, remarks } = req.body;

  try {
    await prisma.records.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        exercise_type,
        sets: parseInt(sets, 10),
        reps: parseInt(reps, 10),
        remarks,
      },
    });
    res.send("Exercise entry updated successfully");
  } catch (err) {
    console.error("Error updating exercise entry:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/delete_exercise_entry", async (req, res) => {
  const { id } = req.body;

  try {
    await prisma.records.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        deleted_at: new Date(),
      },
    });
    res.send("Exercise entry marked as deleted successfully");
  } catch (err) {
    console.error("Error marking exercise entry as deleted:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/undo_delete_exercise_entry", async (req, res) => {
  const { id } = req.body;

  try {
    await prisma.records.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        deleted_at: null,
      },
    });
    res.send("Exercise entry marked as not deleted successfully");
  } catch (err) {
    console.error("Error marking exercise entry as not deleted:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/check_username", async (req, res) => {
  const { username } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { username },
    });
    const isUsernameAvailable = !user;
    res.json({ isUsernameAvailable });
  } catch (err) {
    console.error("Error checking username availability:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/add_user", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = await prisma.users.create({
      data: { username, hashed_password },
    });
    res.json({ userId: newUser.id });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/authentication", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ userId: null });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { username },
    });

    if (!user) {
      return res.json({ userId: null });
    }

    const match = await bcrypt.compare(password, user.hashed_password);

    if (!match) {
      return res.json({ userId: null });
    }

    res.json({ userId: user.id });
  } catch (err) {
    console.error("Error during authentication:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
