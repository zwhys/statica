import express from "express";
import cors from "cors";
import pool from "./db";
import { getUsers, getExercise_types, getRecords } from "./api";

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
      const users = await getUsers();
      res.json(users);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
});

app.get("/exercise_types", async (req, res) => {
    try {
      const exercise_types = await getExercise_types();
      res.json(exercise_types);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
});

app.get("/records", async (req, res) => {
    try {
      const records = await getRecords();
      res.json(records);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
});

app.post("/add_exercise_entry", async (req, res) => {
  const { userid, date_of_entry, exercise_type, sets, reps, remarks } =
    req.body;

  try {
    let query = `
    INSERT INTO records (userid, date_of_entry, exercise_type, sets, reps, remarks)
    VALUES ($1, $2, $3, $4, $5, $6)
    `;
    let queryParams = [
      userid,
      date_of_entry,
      exercise_type,
      sets,
      reps,
      remarks,
    ];

    await pool.query(query, queryParams);
    res.status(200).send("Exercise entry saved successfully");
  } catch (err) {
    console.error("Error saving exercise entry:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
