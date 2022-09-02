# pernStack01-back

Se define un proyecto nuevo de Node
    npm init -y
        crea el archivo package.json

Se instalan los paquetes
    Express
        npm install express
            framework de node para crear un servidor de manera simple
    Morgan
        npm i morgan
            permite listar o ver por consola las peticiones que van llegando
    Cors
        npm i cors
            permite comunicar dos servidores en dos dominios distintos
    ( npm i express morgan cors )

    Nodemon (solo para usar en desarrollo)
        npm i nodemon -D
            el -D sirve para instalarlo como dependencias de desarrollo, en las dependencias necesarias para el funcionamiento de la aplicación
            permite comunicar dos servidores en dos dominios distintos

- En la carpeta /src/routes se definen URLs dentro del BackEnd, endPoints o las URLs que se van a pedir desde el FrontEnd

- La carpeta /src/controllers permite ejecutar funciones cuando una URL sea visitada

- Se crea archivo 'config.js' donde se van a guardar variables de entorno, cadena de conexión a la base de datos

- Se modifica archivo 'package.json' y se agrega
    "start": "node src/index.js"
        que se ejecuta desde consola con 'npm start' para correr el archivo index.js que a su vez arranca el servidor

- Se modifica archivo 'package.json' y se agrega
    "dev": "nodemon src/index.js"
        escucha los cambios realizados en el servidor y lo recarga, se ejecuta como 'npm run dev'

https://www.youtube.com/watch?v=_zGL_MU29zs&t=178s
voy por 0:16:15