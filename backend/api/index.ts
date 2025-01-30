import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://statica-teal.vercel.app"],
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

app.get("/exercise-types", async (req, res) => {
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
        userId: userId,
        deleted_at: null,
      },
      include: {
        exercise_types: true,
      },
    });
    res.json(records);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Server error");
  }
});

app.get("/user-info", async (req, res) => {
  try {
    const userId = parseInt(req.query.userId as string, 10);
    const userInfo = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        age: true,
        weight: true,
        additionalInfo: true,
      },
    });
    res.json(userInfo);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Server error");
  }
});

app.post("/add-exercise-entry", async (req, res) => {
  const { userId, exerciseType, sets, reps, remarks } = req.body;

  const dateOfEntry = new Date(req.body.data_of_entry);
  const validDate = isNaN(dateOfEntry.getTime())
    ? new Date().toISOString()
    : dateOfEntry.toISOString();
  try {
    await prisma.records.create({
      data: {
        userId,
        dateOfEntry: validDate,
        exerciseType,
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

app.post("/update-exercise-entry", async (req, res) => {
  const { id, exerciseType, sets, reps, remarks } = req.body;

  try {
    await prisma.records.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        exerciseType,
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

app.post("/delete-exercise-entry", async (req, res) => {
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

app.post("/undo-delete-exercise-entry", async (req, res) => {
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

app.post("/update-user-info", async (req, res) => {
  const { userId, age, weight, additionalInfo } = req.body;

  try {
    await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        age: parseInt(age, 10),
        weight: parseInt(weight, 10),
        additionalInfo,
      },
    });
    res.send("User info updated successfully");
  } catch (err) {
    console.error("Error updating user info:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/check-username", async (req, res) => {
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

app.post("/add-user", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.users.create({
      data: { username, hashedPassword },
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

    const match = await bcrypt.compare(password, user.hashedPassword);

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

module.exports = app;
