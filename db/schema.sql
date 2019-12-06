DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
ALTER USER 'root'@'localhost' IDENTIFIED WITH
	mysql_native_password BY '';
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);