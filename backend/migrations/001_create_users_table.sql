CREATE TABLE
    users (
        id SERIAL PRIMARY KEY NOT NULL,
        username VARCHAR(50) UNIQUE NOT NULL,
        password TEXT NOT NULL
    );