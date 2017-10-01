

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(400),
  year VARCHAR(200),
  rating VARCHAR(200),
  year_released VARCHAR(200),
  runtime VARCHAR(200),
  genre VARCHAR(200),
  plot TEXT,
  poster TEXT
);

ALTER TABLE movies ADD COLUMN created_at TIMESTAMP;
