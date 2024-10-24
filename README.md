# Prueba Técnica Mega GO
## 1- Requisitos
- Git
- node
- npm 
- MongoDBCompass
- Docker Desktop

## 2- Primer Paso 
Se debe clonar el repositorio y instalar las dependencias.
`git clone https://github.com/KeviinJerez/Prueba-Mega`

## 3- Construir Backend

-- Ingresar a la carpeta que contiene el Backend con el comando `cd backMega` .

-- Instalar las dependencias con el comando `npm i`.

-- Cree un archivo .env en la carpeta backMega, en la carpeta backMega se encuentra un archivo llamado .env.template en el cual se indica con que parámetros y variables se tiene que crear el archivo .env, puede utilizar el ejemplo de configuración que se encuentra ahí.

-- En este punto de deberá abrir "Docker Desktop" y ejecutar el siguiente comando en la  `docker compose up -d`, esto creará la imagen de la base de datos Mongo.

-- Procesa a abrir MongoDBCompass y ingrese a agregar una nueva conexión, en el campo URI debe ingresar lo que esta en la variable "MONGO_URL" del archivo .env, si sigue el ejemplo deberá ingresar "mongodb://pruebamega:123456@localhost:27017", luego ingrese un nombre y indíquele un color, para luego hacer click en "guardar y conectar".

-- Ahora en la terminal deberá correr el Backend con el comando `npm run dev`, al correr el comando se insertaran automáticamente los datos (noticias y periodistas) de pruebas.




## 4- Construir Frontend

-- Ingresar a la carpeta que contiene el Frontend con el comando `cd frontMega` .

-- Instalar las dependencias con el comando `npm i`.

-- Ahora en la terminal deberá correr el Frontend con el comando `npm run dev`, al ejecutar el Frontend favor de verificar en la terminal que el puerto en el cual se ejecuto sea el "5173", dado que este puede variar quizás al "5174", por defecto se dejo en el puerto "5173", en caso de que haya cambiado y no sea el "5173", en la línea 16 del archivo "app.js" que se encuentra la carpeta del "src" del Backend, se puede cambiar la dirección del puerto que se recibe.

## 5.1- Swaggers News 
-Para probar esto se utilizo Postman, cuando el URL termine /id, se debe ingresar el parámetro id en la sección  "Params", luego se realiza la solicitud, si la solicitud requiere id y  un JSON para modificar algo, en la sección de "Body" se debe seleccionar la opción "raw" y luego "JSON".
### Get All News
- URL: http://localhost:5000/news
- Método: GET

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `[{"_id": "6719a3d6ce02219f4d64fb12",
"title": "Apple lanza el nuevo iPhone 16 con cámaras mejoradas",
"description": "La compañía presentó el iPhone 16, que incluye mejoras en la calidad de las cámaras, mayor duración de batería y un chip A19 más eficiente. La pantalla también ha sido optimizada para una experiencia de visualización más fluida.",
"imageUrl":"https://media.gq.com.mx/photos/66df44567d3ceddfd877165b/16:9/w_2560%2Cc_limit/Apple_iPhone_16_gama_colores%2520(1).jpg",
"videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
"journalistId": "6719a3d6ce02219f4d64fb0b",
"__v": 0
}, ...]`

- Respuesta en caso de error:
-- Código de respuesta: 500
-- Ejemplo de resultado: `"message": "Internal server error"`

### Get One News
- URL: http://localhost:5000/news/:id
- Método: GET
- Parámetro de entrada: `id` -> `6719a3d6ce02219f4d64fb12`

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{
"_id": "6719a3d6ce02219f4d64fb12",
"title": "Apple lanza el nuevo iPhone 16 con cámaras mejoradas",
"description": "La compañía presentó el iPhone 16, que incluye mejoras en la calidad de las cámaras, mayor duración de batería y un chip A19 más eficiente. La pantalla también ha sido optimizada para una experiencia de visualización más fluida.",
"imageUrl":"https://media.gq.com.mx/photos/66df44567d3ceddfd877165b/16:9/w_2560%2Cc_limit/Apple_iPhone_16_gama_colores%2520(1).jpg",
"videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
"journalistId": "6719a3d6ce02219f4d64fb0b",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 404
-- Ejemplo de resultado: `"message": "iD no valido"`

### Post One New
- URL: http://localhost:5000/news
- Método: POST
- Parámetro de entrada: `{
"title": "TITULO DE LA NOTICIA",
"description": "DESCRIPCION DE LA NOTICIA",
"imageUrl": "LINK DE LA IMAGEN",
"videoUrl": "LINK DEL VIDEO",
"journalistId": "6719a3d6ce02219f4d64fb0b"}`

- Respuesta en caso de éxito:
-- Código de respuesta : 201 
-- Ejemplo del resultado: `{
"title": "TITULO DE LA NOTICIA",
"description": "DESCRIPCION DE LA NOTICIA",
"imageUrl": "LINK DE LA IMAGEN",
"videoUrl": "LINK DEL VIDEO",
"journalistId": "6719a3d6ce02219f4d64fb0b",
"_id": "6719ad29a3c11385dbd9a584",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 404
-- Ejemplo de resultado: `"message": "Ingrese todos los datos, (title, description, imageUrl, videoUrl, journalistId)"`

### Put One New
- URL: http://localhost:5000/news/:id
- Método: PUT
- Parámetro de entrada: `id` --> `6719ad29a3c11385dbd9a584` &&
`{
"title": "CAMBIO DE TITULO EN LA NOTICIA",
"description": "DESCRIPCION DE LA NOTICIA",
"imageUrl": "LINK DE LA IMAGEN",
"videoUrl": "LINK DEL VIDEO",
"journalistId": "6719a3d6ce02219f4d64fb0b"}`

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{
"_id": "6719ad29a3c11385dbd9a584",
"title": "CAMBIO DE TITULO EN LA NOTICIA",
"description": "DESCRIPCION DE LA NOTICIA",
"imageUrl": "LINK DE LA IMAGEN",
"videoUrl": "LINK DEL VIDEO",
"journalistId": "6719a3d6ce02219f4d64fb0b",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 400
-- Ejemplo de resultado: `"message":Bad Request"`

### Patch One New
- URL: http://localhost:5000/news/:id
- Método: PATCH
- Parámetro de entrada: 
-- Por lo menos se debe enviar un dato
`id` --> `6719ad29a3c11385dbd9a584` &&
`{
"description": "DESCRIPCION DE LA NOTICIA CAMBIADA",}`

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{
"_id": "6719ad29a3c11385dbd9a584",
"title": "CAMBIO DE TITULO EN LA NOTICIA",
"description": "DESCRIPCION DE LA NOTICIA CAMBIADA",
"imageUrl": "LINK DE LA IMAGEN",
"videoUrl": "LINK DEL VIDEO",
"journalistId": "6719a3d6ce02219f4d64fb0b",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 400
-- Ejemplo de resultado: `"message":"Bad Request"` o en este caso si no se manda por lo menos un dato da el error `"message": "Se debe enviar por lo menos un campo, (title, description, imageUrl, videoUrl)"`

### Delete One New
- URL: http://localhost:5000/news/:id
- Método: DELETE
- Parámetro de entrada: `id` --> `6719ad29a3c11385dbd9a584` 

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{"message": "Noticia eliminada"`

- Respuesta en caso de error:
-- Código de respuesta: 500
-- Ejemplo de resultado: `"message": "Internal server error"`

## 5.2- Swaggers Journalist
### Get All Journalist
- URL: http://localhost:5000/journalist
- Método: GET

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `[{"_id": "6719a3d6ce02219f4d64fb0b",
"name": "Kevin Jerez",
"rut": "20.669.110-7",
"email": "jerez.kevin@gmail.com",
"dateCreated": "2024-10-24T01:33:10.195Z",
"__v": 0
}, ...]`

- Respuesta en caso de error:
-- Código de respuesta: 500
-- Ejemplo de resultado: `"message": "Internal server error"`

### Get One Journalist
- URL: http://localhost:5000/journalist/:id
- Método: GET
- Parámetro de entrada: `id` -> `6719a3d6ce02219f4d64fb0b`

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{
"_id": "6719a3d6ce02219f4d64fb0b",
"name": "Kevin Jerez",
"rut": "20.669.110-7",
"email": "jerez.kevin@gmail.com",
"dateCreated": "2024-10-24T01:33:10.195Z",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 404
-- Ejemplo de resultado: `"message": "iD no valido"`

### Post One Journalist
- URL: http://localhost:5000/journalist
- Método: POST
- Parámetro de entrada: `{
"name": "PRUEBA PERIODISTA",
"rut": "55.444.333-2",
"email": "PRUEBA@gmail.com"}`

- Respuesta en caso de éxito:
-- Código de respuesta : 201 
-- Ejemplo del resultado: `{
"name": "PRUEBA PERIODISTA",
"rut": "55.444.333-2",
"email": "PRUEBA@gmail.com",
"_id": "6719ceeb1fb32ea81bd4d734",
"dateCreated": "2024-10-24T04:36:59.371Z",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 404
-- Ejemplo de resultado: `"message": "Ingrese todos los datos, (title, description, imageUrl, videoUrl, journalistId)"`

### Put One Journalist
- URL: http://localhost:5000/journalist/:id
- Método: PUT
- Parámetro de entrada: `id` --> `6719ceeb1fb32ea81bd4d734` &&
`{"name": "CAMBIO DE NOMBRE PERIODISTA",
"rut": "55.444.333-2",
"email": "PRUEBA@gmail.com""}`

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{
"_id": "6719ceeb1fb32ea81bd4d734",
"name": "CAMBIO DE NOMBRE PERIODISTA",
"rut": "55.444.333-2",
"email": "PRUEBA@gmail.com",
"dateCreated": "2024-10-24T04:36:59.371Z",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 400
-- Ejemplo de resultado: `"message":Bad Request"`

### Patch One Journalist
- URL: http://localhost:5000/journalist/:id
- Método: PATCH
- Parámetro de entrada: 
-- Por lo menos se debe enviar un dato
`id` --> `6719ceeb1fb32ea81bd4d734` &&
`{"email": "PRUEBA.CAMBIO@gmail.com",}`

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{
"_id": "6719ceeb1fb32ea81bd4d734",
"name": "CAMBIO DE NOMBRE PERIODISTA",
"rut": "55.444.333-2",
"email": "PRUEBA.CAMBIO@gmail.com",
"dateCreated": "2024-10-24T04:36:59.371Z",
"__v": 0}`

- Respuesta en caso de error:
-- Código de respuesta: 400
-- Ejemplo de resultado: `"message":"Bad Request"` o en este caso si no se manda por lo menos un dato da el error `"message": "Se debe enviar por lo menos un campo, (name, email, rut))"`

### Delete One Journalist
- URL: http://localhost:5000/journalist/:id
- Método: DELETE
- Parámetro de entrada: `id` --> `6719ceeb1fb32ea81bd4d734` 

- Respuesta en caso de éxito:
-- Código de respuesta : 200 
-- Ejemplo del resultado: `{"message":"Perisodista eliminado"`

- Respuesta en caso de error:
-- Código de respuesta: 500
-- Ejemplo de resultado: `"message": "Internal server error"`