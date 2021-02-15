CREATE DATABASE vaccinationCAA;

use vaccinationCAA;

CREATE table user(
    idUser INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(15) NOT NULL,
    password varchar(20) NOT NULL
);

CREATE TABLE guatemala(
 idVaccineUpgrade INT(100) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 location VARCHAR (50) NOT NULL,
 date INT(50) NOT NULL,
 vaccine INT(50) NOT NULL,
 source VARCHAR(80) NOT NULL,
 total_vaccinations INT(25) NOT NULL,
 people_vaccinaed INT(25) NOT NULL,
 people_fully_vaccinated INT(25) NOT NULL


);

SHOW TABLES;

describe guatemala;

ALTER USER 'root'@'3306' IDENTIFIED WITH mysql_native_password BY 'admin'
ALTER USER 'root'@'3306' IDENTIFIED WITH mysql_native_password BY 'admin'
ALTER USER 'root'@'3306' IDENTIFIED WITH  mysql_native_password BY 'bar';

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'cardona';