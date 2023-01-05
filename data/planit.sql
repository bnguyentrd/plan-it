DROP TABLE IF EXISTS users;

CREATE TABLE users (
    -- id INTEGER NOT NULL UNIQUE,
    id SERIAL PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    avatar TEXT NOT NULL,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    referrer_id INTEGER REFERENCES users("id") ON DELETE CASCADE
);


INSERT INTO users VALUES
  ('John', 'Smith', '1780000.jpeg', 'John@gmail.com', 'Jsmith', null),
  ('Dave', 'Jones', '178030988.jpeg', 'Dave@gmail.com', 'Djones', null),
  ('Patrick', 'Lacquer', '17800.jpeg', 'Patrick@gmail.com', 'Placquer', null),
  ('Abbie', 'Schmabbie', '10000.jpeg', 'Abbie@gmail.com', 'Aschabbie', null),
  ('David', 'Agarwal', '170000.jpeg', 'David@gmail.com', 'Dagarwal', null),
  ('Susie', 'Chen', '60000.jpeg', 'Susie@gmail.com', 'Schen', null),
  ('Matt', 'Gvido', '14780000.jpeg', 'Matt@gmail.com', 'Mvido', null),
  ('Zuirch', 'Hernández', '1780320948.jpeg', 'Zurich@gmail.com', 'Zhernandez',5),
  ('Will', 'Smith', '17800000089.jpeg', 'Will@gmail.com', 'Wsmith',4),
  ('Yuri', 'Mikhailov', '17800000293908.jpeg', 'Yuri@gmail.com', 'Ymikhailov',3)
  ;
