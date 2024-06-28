import express from "express";
import cors from "cors";
import { getUsers, getExercise_types, getRecords } from "./api";

const app = express();
const port = 3001;

app.use(
  cors({ origin: "localhost", methods: ["GET", "POST", "PUT", "DELETE"] })
);

app.get("/users", async (req, res) => {
  setTimeout(async () => {
    try {
      const users = await getUsers();
      res.json(users);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.get("/exercise_types", async (req, res) => {
  setTimeout(async () => {
    try {
      const exercise_types = await getExercise_types();
      res.json(exercise_types);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.get("/records", async (req, res) => {
  setTimeout(async () => {
    try {
      const records = await getRecords();
      res.json(records);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
