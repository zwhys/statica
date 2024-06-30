import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import pool from "./db";
import { getUsers, getExercise_types, getRecords } from "./api";
import { error } from "console";

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

app.post("/check_username", async (req, res) => {
  const { username } = req.body;
  
  try {
    const checkUserQuery = `
      SELECT * FROM users WHERE username = $1 LIMIT 1;
    `;
    const checkUserParams = [username];
    const existingUser = await pool.query(checkUserQuery, checkUserParams);

    if (existingUser.rows.length > 0) {
      res.json({ isUnique: false }); // Username already exists
    } else {
      res.json({ isUnique: true }); // Username is unique
    }
  } catch (err) {
    console.error("Error checking username uniqueness:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post("/add_user", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashed_password = await bcrypt.hash(password, 10);
    let query = `
    INSERT INTO users ( username, hashed_password)
    VALUES ($1, $2)
    `;
    let queryParams = [username, hashed_password];

    await pool.query(query, queryParams);
    res.status(200).json({ message: "User added successfully" });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// app.post("/check_username", async (req, res) => { delete later
//   const { username } = req.body;
  
//   try {
//     const checkUserQuery = `
//       SELECT * FROM users WHERE username = $1 LIMIT 1;
//     `;
//     const checkUserParams = [username];
//     const existingUser = await pool.query(checkUserQuery, checkUserParams);

//     if (existingUser.rows.length > 0) {
//       res.json({ isUnique: false }); // Username already exists
//     } else {
//       res.json({ isUnique: true }); // Username is unique
//     }
//   } catch (err) {
//     console.error("Error checking username uniqueness:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

app.post("/authentication", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).json({ message: "Username and password are required" }); //TODO: Do it another way
  }

  let query = `
    SELECT * FROM users WHERE username = $1 LIMIT 1;
  `;
  let queryParams = [username];

  try {
    const { rows } = await pool.query(query, queryParams);
    
    // Check if user exists
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const dbPasswordHash = rows[0].hashed_password;

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, dbPasswordHash);

    if (isPasswordValid) {
      // Passwords match, user authenticated
      res.json({ isAuthenticated: true });
    } else {
      // Passwords do not match
      res.json({ isAuthenticated: false });
    }
  } catch (err) {
    console.error("Error during authentication:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//TODO: Set up prisma
