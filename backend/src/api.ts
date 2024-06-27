import db from "./db";

export const getUsers = async () => {
  try {
    const usersQuery = `
      SELECT 
        id AS "id", 
        username AS "username"
        password AS "password"
      FROM users
    `;

    const { rows } = await db.query(usersQuery);
    return rows;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};

export const getRecords = async () => {
  try {
    const recordsQuery = `
      SELECT 
        entryid AS "entryid"
        id AS "id", 
        date_of_entry AS "date_of_entry"
        exercise_type AS "exercise_type"
        sets AS "sets"
        reps AS "reps"
        remarks AS "remarks"
      FROM records;
    `;

    const { rows } = await db.query(recordsQuery);
    return rows;
  } catch (err) {
    console.error("Error fetching records:", err);
    throw err;
  }
};

export const getExercise_types = async () => {
  try {
    const exercise_typesQuery = `
      SELECT
        exercise_types AS "exercise_types", 
      FROM exercise_types
    `;

    const { rows } = await db.query(exercise_typesQuery);
    return rows;
  } catch (err) {
    console.error("Error fetching exercise_types:", err);
    throw err;
  }
};
