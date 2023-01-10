DROP TABLE IF EXISTS accounts, polls, poll_options;

CREATE TABLE accounts (
    -- id INTEGER NOT NULL UNIQUE,
    id SERIAL PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    avatar TEXT NOT NULL,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    referrer_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE
);
