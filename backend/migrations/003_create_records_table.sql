CREATE TABLE
    records (
        id SERIAL PRIMARY KEY NOT NULL,
        user_id INTEGER NOT NULL,
        date_of_entry DATE NOT NULL,
        exercise_type VARCHAR(50) REFERENCES exercise_types (exercise_type) NOT NULL,
        sets SMALLINT NOT NULL,
        reps SMALLINT NOT NULL,
        remarks TEXT,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );