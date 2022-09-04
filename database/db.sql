--CREATE DATABASE tasksdb;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);

SELECT * FROM task;

DELETE FROM task WHERE title='unoT';

INSERT INTO "task" (title, description) VALUES ('unoT', 'unoD');