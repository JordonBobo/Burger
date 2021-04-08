
-- CREATE DATABASE burgers_db;
USE g1v3u8db9rtpl41p;
CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT, 
    burgerName VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    primary key (id)
);


