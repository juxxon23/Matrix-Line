-- Database: Matrix_line

-- DROP DATABASE "Matrix_line";

--	CREATE DATABASE "Matrix_line"
--		WITH
--		OWNER = postgres
--   	ENCODING = 'UTF8'
--  	LC_COLLATE = 'en_US.UTF-8'
--		LC_CTYPE = 'en_US.UTF-8'
--  	TABLESPACE = pg_default
--   	CONNECTION LIMIT = -1;
	
CREATE TABLE asesor (
	id_asesor INTEGER PRIMARY KEY NOT NULL,
	nombre_a varchar(50) NOT NULL,
	apellido_a varchar(50) NOT NULL,
	documento_a varchar(20) NOT NULL,
	password_a varchar(32) NOT NULL,
	telefono_a varchar(20)
);

CREATE TABLE usuario (
	nombre_u varchar(50) NOT NULL,
	apellido_u varchar(50) NOT NULL,
	documento_u varchar(20) PRIMARY KEY NOT NULL,
	telefono_u varchar(20) NOT NULL,
	fecha_nacimiento varchar(20) NOT NULL
);

CREATE TABLE equipo (
	serial_equipo INTEGER PRIMARY KEY NOT NULL,
	marca varchar(50),
	descripcion varchar(50),
	estado_legal boolean DEFAULT '1' NOT NULL
);

CREATE TABLE linea (
	numero_linea varchar(30) PRIMARY KEY NOT NULL,
	estado_linea boolean DEFAULT '1',
	documento_u varchar(20) REFERENCES usuario(documento_u),
	serial_equipo INTEGER REFERENCES equipo(serial_equipo)
);

CREATE TABLE factura (
	id_factura INTEGER PRIMARY KEY NOT NULL,
	numero_linea varchar(30) REFERENCES linea(numero_linea),
	fecha_emision DATE,
	valor DOUBLE PRECISION
);
