CREATE TABLE
    users (
        id SERIAL PRIMARY KEY NOT NULL,
        username VARCHAR(50) UNIQUE NOT NULL,
        preferredname VARCHAR(50),
        hashed_password TEXT NOT NULL
    );
