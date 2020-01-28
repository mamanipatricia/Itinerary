# backend
## Requisitos
Tener instalado:
 - PostgreSQL
 - nodejs
 - git
## Pasos para hacer el correr el server

### Paso 1.
Para instalar las dependencias de la aplicacion ejecutar
```
npm install
```
### Paso 2.
Configuar las credenciales de la base de datos en el archivo `.env`
```
DB_HOST=127.0.0.1
DB_NAME=<NOMBRE_BASE_DE_DATOS>
DB_USER=postgres
DB_PASSWORD=<PASSWORD>
DB_CONNECTION=postgres
```
### Paso 3.
Ejecutar la migracion de las tablas
```
./node_modules/.bin/sequelize-cli db:migrate
```

### Paso 4. (Opcional)
Ejecutar los seeders para tener datos iniciales en la DB
```
./node_modules/.bin/sequelize-cli db:seed:all
```
### Paso 5.
Levantar el servidor
```
npm run server
```

 Note: fork application
