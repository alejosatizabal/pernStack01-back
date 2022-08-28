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

https://www.youtube.com/watch?v=_zGL_MU29zs&t=178s
voy por 0:09:14