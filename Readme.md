# Preguntas de la Práctica 1

## 1. Actualice la página en su navegador y pregúntese: ¿Hay cambios en la visualización del sitio web?  
Si la respuesta es negativa, piense un momento: ¿Para qué sirven las etiquetas meta?  
**Respuesta:**  
Las etiquetas meta sirven para proporcionar información adicional sobre la página web, como la codificación de caracteres, la descripción, palabras clave, autor y configuración de la vista. No afectan directamente la visualización del contenido, pero son importantes para el SEO, la accesibilidad y el comportamiento del navegador.

## 2. Asegúrese de entender el valor del atributo `src` de la etiqueta `img`.  
- ¿Qué pasaría si la imagen está guardada en la misma carpeta de la página web?  
    **Respuesta:**  
    Si la imagen está en la misma carpeta, solo se debe indicar el nombre del archivo en el atributo `src` (por ejemplo, `src="imagen.jpg"`).

- ¿Y si está en una carpeta superior?  
    **Respuesta:**  
    Si la imagen está en una carpeta superior, se debe usar `../` para subir un nivel en la estructura de carpetas (por ejemplo, `src="../imagen.jpg"`).

    # Respuesta a la pregunta de la segunda práctica

## Pregunta 10 – Cambios en la visualización con Flexbox

### ¿Hay cambios en la visualización del sitio web? ¿Por qué se dan estos cambios entre tan pocas líneas de diseño CSS?

Sí, al actualizar la página se nota que los elementos se ven diferentes: cambian de lugar, se acomodan mejor y tienen más espacio entre ellos. Esto pasa porque usamos algo llamado **Flexbox**, que es una forma moderna de organizar los elementos en una página web.

Aunque solo se escriben unas pocas líneas de código, Flexbox tiene mucho poder. Nos permite decidir si los elementos van en fila o en columna, si se ajustan al espacio disponible, y cuánto espacio debe haber entre ellos. Es como tener una caja mágica que acomoda todo automáticamente.

### En resumen

Con Flexbox, no hace falta escribir mucho para lograr que la página se vea ordenada y clara. Es una herramienta que ayuda a que el diseño se adapte mejor a diferentes tamaños de pantalla y se vea más profesional, incluso si estamos empezando a aprender CSS.

# Respuesta a la pregunta de la Tercera práctica

## Pregunta 10 de la pagina 10

### ¿Puedo diseñar toda mi web usando GRID? Porqué se dan estos cambios entre tan pocas líneas de diseño CSS. 

Claro, puedes usar Grid para diseñar toda tu web sin problema. Los cambios se notan rápido porque con muy pocas líneas puedes reorganizar todo el diseño visual. Es como tener un tablero donde mueves las piezas sin tocar el contenido.

# Respuestas a las preguntas de la cuarta práctica

### ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

JavaScript respeta un orden lógico al evaluar operaciones: primero los paréntesis, luego multiplicación y suma. El operador `**` se procesa de derecha a izquierda. Estas reglas aseguran que las expresiones matemáticas se interpreten correctamente.

### ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
Sí. La estructura `if/else` permite ejecutar acciones según condiciones. Aunque la sintaxis varía, el principio de decisión es el mismo en casi todos los lenguajes.

# Respuestas a las preguntas de la quinta práctica 
### ¿Qué significa className en React? ¿las props tienen un limite? ¿Quién define las props?

className en React: es la forma de asignar clases CSS a un elemento, porque la palabra class está reservada en JavaScript.

### ¿Las props tienen un límite? 
No, se pueden pasar tantas como se desee, aunque demasiadas hacen el código difícil de mantener.

### ¿Quién define las props? 
El componente padre decide que props enviar, y el componente hijo las recibe como parámetros.

# Respuestas a las preguntas de la práctica 8

## ¿Cuál es la diferencia entre autenticación y autorizacion?

**Authentication (Autenticación):**
- Es el proceso de verificar la identidad de un usuario
- Confirma quién es el usuario
- Ejemplo: Login con usuario y contraseña

**Authorization (Autorización):** 
- Es el proceso de verificar qué permisos tiene un usuario autenticado
- Determina a qué recursos puede acceder
- Ejemplo: Roles y permisos de usuario

## ¿Cuál es la función del token JWT en la guía?

El token JWT en la guía cumple las siguientes funciones:

- Almacena de forma segura la información del usuario autenticado
- Permite mantener la sesión del usuario entre requests
- Contiene claims (información) como:
    - ID del usuario
    - Roles/permisos
    - Tiempo de expiración
- Se envía en el header de las peticiones HTTP
- Evita tener que consultar la base de datos en cada request