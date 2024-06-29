import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
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
  const {
    user_id: user_id,
    date_of_entry,
    exercise_type,
    sets,
    reps,
    remarks,
  } = req.body;

  try {
    let query = `
    INSERT INTO records (user_id, date_of_entry, exercise_type, sets, reps, remarks)
    VALUES ($1, $2, $3, $4, $5, $6)
    `;
    let queryParams = [
      user_id,
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

app.post("/add_user", async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkUserQuery = `
      SELECT * FROM users WHERE username = $1 LIMIT 1;
    `;
    const checkUserParams = [username];
    const existingUser = await pool.query(checkUserQuery, checkUserParams);
    if (existingUser.rows.length > 0) {
      return res.status(400).send("Non-Unique Username");
    }
    console.log(req.body)
    const hashed_password = await bcrypt.hash(password, 10);
    let query = `
    INSERT INTO users ( username, hashed_password)
    VALUES ($1, $2)
    `;
    let queryParams = [username, hashed_password];

    await pool.query(query, queryParams);
    res.status(200).send("User added successfully");
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let query = `
  SELECT * FROM users WHERE username = $1 LIMIT 1;
  `;
  let queryParams = [username];
  if (username == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    const { rows } = await pool.query(query, queryParams);
    const db_password = rows[0].hashed_password;
    if (await bcrypt.compare(password, db_password)) {
      res.status(200).send("User Authenticated");
    } else {
      res.status(403).send("Access Denied");
    }
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
