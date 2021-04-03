
CREATE DATANSE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INTEGER NON NULL AUTO_INCRIMENT,
    burger_name VARCHAR,
    devoured BOOLEAN DEFAULT FALSE,
    primary key (id)
)










