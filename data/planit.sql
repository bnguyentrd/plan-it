DROP TABLE IF EXISTS accounts, polls, pollOptions;

-- test
-- CREATE TABLE accounts (
--     -- id INTEGER NOT NULL UNIQUE,
--     id SERIAL PRIMARY KEY NOT NULL,
--     first_name TEXT NOT NULL,
--     last_name TEXT NOT NULL,
--     avatar TEXT NOT NULL,
--     email TEXT NOT NULL,
--     username TEXT NOT NULL,
--     hashed_password TEXT NOT NULL,
--     referrer_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE
-- );

CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    hashed_password VARCHAR(500) NOT NULL
);
