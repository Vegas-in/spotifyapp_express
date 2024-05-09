-- Crear tabla users
CREATE TABLE users (
  id_author serial NOT NULL PRIMARY KEY, 
  name varchar(45), 
  surname varchar(45), 
  email varchar(100) NOT NULL UNIQUE,
  favs varchar(255)
);


-- Insertar datos en tabla users
INSERT INTO users(name,surname,email,favs)
VALUES
('Paolo','Sanz','Paolo@thebridgeschool.es','Blondie, Jackson Five'),
('Adriano','Rivera','Adriano@thebridgeschool.es','Oliver y Benji, KaseO'),


INSERT INTO users(name,surname,email,favs) 
      VALUES ('Pepito','Perez','pepito@code.com','Solomun, Wu Tang Clan')


UPDATE users
      SET
          name='Papito', 
          surname='Pared', 
          email='papito@codewars.com', 
          favs='KaseO, Wu Tang Clan'
      WHERE 
          email = 'pepito@code.com'


