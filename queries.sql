CREATE DATABASE todos

CREATE TABLE todo (id SERIAL PRIMARY KEY, task TEXT);

INSERT INTO todo(task) VALUES ('Create ToDo');

INSERT INTO todo(task) VALUES ('Walk the dog');

INSERT INTO todo(task) VALUES ('Go outside');
