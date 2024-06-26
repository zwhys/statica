CREATE TABLE
    records (
        entryid SERIAL PRIMARY KEY NOT NULL,
        userid INTEGER REFERENCES users (userid) NOT NULL,
        date_of_entry DATE NOT NULL,
        exercise_type VARCHAR(50) REFERENCES exercise_types (exercise_type) NOT NULL,
        sets SMALLINT NOT NULL,
        reps SMALLINT NOT NULL,
        comments TEXT
    );