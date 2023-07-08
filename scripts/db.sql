

CREATE TABLE IF NOT EXISTS users(
  id INT NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(60) NOT NULL ,
  password VARCHAR(255) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  dispotivio VARCHAR(255),
  UNIQUE(usuario),
  UNIQUE(password),
  PRIMARY KEY(id)
)