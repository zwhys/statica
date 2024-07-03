CREATE TABLE
    exercise_types (
        id SERIAL PRIMARY KEY NOT NULL,
        exercise_type VARCHAR(50) UNIQUE NOT NULL,
        colour VARCHAR(7) NOT NULL
    );