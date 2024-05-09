-- Crear tabla users
CREATE TABLE users (
  id_user serial NOT NULL PRIMARY KEY, 
  name varchar(45), 
  surname varchar(45), 
  email varchar(100) NOT NULL UNIQUE,
  password varchar(255) NOT NULL
);


-- Insertar datos en tabla users
INSERT INTO users(name,surname,email,password)
VALUES
('Paolo','Sanz','Paolo@thebridgeschool.es','123456'),
('Adriano','Rivera','Adriano@thebridgeschool.es','123456'),


INSERT INTO users(name,surname,email,password) 
      VALUES ('Pepito','Perez','pepito@code.com','123456')


UPDATE users
      SET
          name='Papito', 
          surname='Pared', 
          email='papito@codewars.com', 
          password='123456'
      WHERE 
          email = 'pepito@code.com'


