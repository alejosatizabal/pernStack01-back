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

- En la barra de tareas del navegador solo se pueden probar peticiones GET, la barra de direcciones siempre envía peticiones GET

- Se instala una extensión de VS Code del tipo 'cliente REST', para hacer peticiones PUT, POST y DELETE
    Thunder Client
    v1.18.7
    Ranga Vadhineni

    - Petición GET, se hace como si fuera un navegador, previamente seleccionando ese tipo de petición
    - Se pueden hacer peticiones PUT, POST y DELETE como si fuera GET, siempre y cuando no lleven parametros

    - Para las peticiones POST, en el 'body' deben ir objetos json
        Ej:
            {
                "titulo": "Hola mundo",
                "descripcion": "es un saludo en español"
            }

- Se instala el módulo para conectar la base de datos PostgreSQL
    npm i pg

- Se puede instalar una extensión para conectarse a la base de datos del proyecto
    PostgreSQL
    v1.4.0
    Chris Kolkman

    - (1) Se puede realizar la conexión a la base de datos en el icono que aparece en el panel izquierdo
    - (2) También se puede realizar la conexión en menú 'View/Command Palette/PostgreSQL:Add Connection'

    - Para conectar con ElephantSQL
        - "The hostname of the database"
            jelani.db.elephantsql.com   (tomado de ElephantSQL)
        - "The PostgreSWL user to authenticate as"
            ykuxufwo        (tomado de ElephantSQL)
        - "The password of the PostgreSQL user"
            'el password respectivo'    (tomado de ElephantSQL)
        - "The port number to connect to"
            5432 (por defecto)
        - Standard Conecction
        - "[Optional] The database to connect to"
            ykuxufwo        (tomado de ElephantSQL)
        - "The display name of the database connection"
            pernStack01     (puede ser cualquier nombre)

- Variables de entorno
    - Se debe instalar 'dotenv'
        npm install dotenv --save
    - Se crea un archivo '.env' en la base del proyecto/repositorio y se ponen las variables que se van a usar
        Ej:
            DATABASE_URL="postgres://fysyiyfisuyi:N-fhsjhakdsuyfudsyfyieu4y2iu43@konami.db.elephantsql.com/fysyiyfisuyi"
    - En el archivo donde se van a usar las variables se requiere a 'dotenv'
        require('dotenv').config();
    - Se usan esas variables de la siguiente manera
        var conString = process.env.DATABASE_URL

https://www.youtube.com/watch?v=_zGL_MU29zs&t=178s
voy por 0:41:14