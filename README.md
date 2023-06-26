# Desarrollo de backend para Login React
## Descripción

Se desarrolla backEnd para Login hecho en React. Se utiliza node.js + express para la construcción de endpoints necesarios y JWT para la autenticación y autorización de usuarios.

## Instalación

Para poder correr el proyecto necesitas realizar los siguientes pasos:

 - Descarga el proyecto y ábrelo en vsCode.
 - Ejecuta el comando ```npm install ```.

## Endpoints disponibles

 - POST Login (http://localhost:3000/login) : Endpoint para autenticación de usuarios recibe un objeto con email y password existentes en la BBDD:
	 {
		"email": "test@test.cl",
		"password": "Qwerty01."
	}
 - POST Registro de usuario (http://localhost:3000/usuarios): Endpoint para registro de nuevos usuarios, recibe un objeto con la siguiente estructura:
 {
	"email": "test@test.cl",
	"password": "password del usuario",
	"rol": "rol del usuario",
	"lenguaje": "idioma del usuario"
}
 - GET Obtiene usuario (http://localhost:3000/usuarios): Endpoint que obtiene los datos de un usuario, se verifica que este autenticado y con un token válido mediante el middleware authUser.

## Consideraciones

Este proyecto cuenta con 2 middleware's:

 - authUser.js: Se encarga de validar que el usuario autenticado envíe una cabecera válida y que tenga un token válido. Además obtiene el mail del usuario desde el payload del usuario.
 - report.js: Se encarga de mostrar por consola cada vez que se realiza una petición a un endpoint e indica a cual se le hizo la petición.

