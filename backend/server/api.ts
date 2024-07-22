import db from "./db";

export const getUsers = async () => {
  try {
    const usersQuery = `
      SELECT * FROM users;
    `;

    const { rows } = await db.query(usersQuery);
    return rows;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};

export const getRecords = async (userId: number) => {
  try {
    const recordsQuery = `
      SELECT 
        *
      FROM records WHERE user_id = $1;
    `;

    const { rows } = await db.query(recordsQuery, [userId]);
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
        *
      FROM exercise_types;
    `;

    const { rows } = await db.query(exercise_typesQuery);
    return rows;
  } catch (err) {
    console.error("Error fetching exercise_types:", err);
    throw err;
  }
};
