import express from "express";
import cors from "cors";
import { getUsers, getExercise_types, getRecords } from "./api";

const app = express();
const port = 3001;

app.use(cors());

app.get("/users", async (req, res) => {
  setTimeout(async () => {
    try {
      const devices = await getUsers();
      res.json(devices);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.get("/exercise_types", async (req, res) => {
  setTimeout(async () => {
    try {
      const devices = await getExercise_types();
      res.json(devices);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.get("/records", async (req, res) => {
  setTimeout(async () => {
    try {
      const devices = await getRecords();
      res.json(devices);
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Server error");
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
