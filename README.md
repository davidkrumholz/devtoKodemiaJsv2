
![logotipo kodemia](./assets/resource%20readme/KODEMIA.png)

# DESAFIO DEV-TO  JAVASCRIPT  GENERACIÓN 27 KODEMIA

## Indice de Contenido

-[Sobre el repositorio](README.md#sobre-el-repositorio)

-[Sobre el desafio](README.md#acerca-del-desafio)

-[Objetivos](./README.md#objetivos)

-[Requerimientos](./README.md#requerimientos-del-desafio)

-[Puntos a Evaluar](./README.md#puntos-a-evaluar)

-[Definición del Problema](https://github.com/davidkrumholz/devtoKodemiaJsv2.git/Objetivos)

-[Analisis del Problema](https://github.com/davidkrumholz/devtoKodemiaJsv2.git/Objetivos)

-[Definción de Herramientas](https://github.com/davidkrumholz/devtoKodemiaJsv2.git/Objetivos)

-[Analisis de herramientas](https://github.com/davidkrumholz/devtoKodemiaJsv2.git/Objetivos)

-[Definción de soluciones](https://github.com/davidkrumholz/devtoKodemiaJsv2.git/Objetivos)

-[Analisis de Soluciones](https://github.com/davidkrumholz/devtoKodemiaJsv2.git/Objetivos)

-[Implementación y depuración ](https://github.com/davidkrumholz/devtoKodemiaJsv2.git/Objetivos)


# SOBRE EL REPOSITORIO

## Mensaje  (Equipo 4)

### David Krumholz, Daniel Gloria, Libardo Ahumada y Emanuel Ortiz
### ¡Bienvenido al repositorio del desafío final del curso de JavaScript! En este proyecto, hemos recreado la página web de DEV.to, utilizando HTML, CSS y JavaScript para implementar sus funcionalidades básicas. DEV.to es una plataforma popular para desarrolladores, donde pueden compartir conocimientos, colaborar y aprender de la comunidad.

### Nuestro objetivo con este desafío ha sido poner en práctica los conocimientos adquiridos durante el curso de JavaScript y aplicarlos en un proyecto realista. A lo largo del desarrollo, hemos trabajado en el diseño y la estructura del sitio web, utilizando HTML y CSS para crear una interfaz atractiva y receptiva.

### Además, hemos utilizado JavaScript para implementar las funcionalidades clave de la plataforma, como la publicación y creación  de posts,  y la clasificación de publicaciones por etiquetas, por antiguedad, rating y relevancia.

### En este repositorio, encontrarás el código fuente completo del proyecto, así como una documentación detallada que explica las decisiones de diseño, las tecnologías utilizadas y las principales características implementadas.

### ¡Esperamos que este proyecto te inspire y te ayude a fortalecer tus habilidades de programación con JavaScript! Si tienes alguna pregunta o sugerencia, no dudes en abrir un problema o enviar una solicitud de extracción. ¡Disfruta explorando el código y feliz aprendizaje!

# ACERCA DEL DESAFIO

## Objetivos
### 1.-Aplicar y Desarrollar habilidades del Pensamiento Estructurado Mediante la resolución de problemas mediante el uso de la lógica y el pensamiento algorítmico.

### 2. Aplicación de conocimientos adquiridos durante el curso de JavaScript. Aplicar los conceptos, técnicas y herramientas aprendidas para desarrollar una solución funcional a la re-creación de la pagina DEV-to.

### 3.Aprender a planificar, diseñar y estructurar un programa o sistema de manera eficiente y organizada.

### 4. Trabajo en equipo y colaboración con otros estudiantes para lograr un objetivo común. Esta experiencia enseña habilidades de comunicación, colaboración y gestión del tiempo, que son esenciales en el desarrollo de software en el mundo real.

### 5. Práctica con herramientas y tecnologías: JavaScript, HTML, CSS. SASS, BoothStrap, git, Github, VisualCode, FireBase.

### En resumen, consolidar los conocimientos teóricos en experiencias prácticas, desarrollar habilidades técnicas y profesionales, y preparar a los estudiantes para enfrentar desafíos reales en el mundo laboral de la programación.

## Requerimientos del desafio:

* Pantalla de inicio con login simulado
* Header logrado y son logear
* Todos los post deben de llevar al detalle del post
* Crear vista del detalle del post, cona siguiente información:
* Imagen
* Autor
* Reacciones(Hardcordeado)
* Titulo
* Tags
* Fecha de creación
* El contenido que sea el texto aleatorio
* Crear post
* Formulario con todos los campos necesarios
* Filtro por nombre desde el buscador
* Filtros
* Relevant: relevantes
* Latest: orden por fecha recientes a mas antiguos
* Top: Raiting(Mayor a menor)
* En vez de listings poner un post aleatorio y que redireccionar al post
* Botón de logout simulado
* Logo de devto redirija al home
* Pantalla de login
* Seleccionar dos tags, y poner una lista con 3 post que tengan ese tag en el aside derecho

## Puntos a Evaluar:

* Requerimientos cumplidos
* Funcionalidad
* Fidelidad al diseño
* Responsividad
* Tecnologías usadas
* Correcta implementación del layout de Bootstrap
* Limpieza y legibilidad del código
* Nombrado de clases según BEM
* Correcto uso de los tags semánticos
* Deploy en Vercel (Plus)


# Pensamiento Estructurado
## Definición del Problema:

### El problema consiste en crear una réplica funcional de la página web de DEV.to, enfocándose en la pantalla de inicio con un login simulado. Se requiere implementar un header con la funcionalidad de inicio de sesión, que redireccione al contenido del post al hacer clic en cada publicación. La vista del detalle del post debe incluir información como imagen, autor, reacciones (hardcodeadas), título, etiquetas y fecha de creación, con el contenido del post como texto aleatorio. Es necesario desarrollar un formulario para crear nuevos posts con todos los campos necesarios. Se debe incorporar un buscador con filtro por nombre para realizar búsquedas específicas. Además, se deben implementar tres filtros: Relevant (publicaciones relevantes), Latest (ordenadas por fecha de más reciente a más antiguo) y Top (ordenadas por mayor a menor rating). En lugar de listings, se utilizará un post aleatorio que redireccione al contenido del post. También se debe agregar un botón de logout simulado y asegurarse de que el logo de DEV.to redireccione a la página de inicio de sesión.

## Analisis del Problema 

### **El desafio incluye la creación de diferentes vistas dinamicas, 5 en total una de ellas solo cambian algunas partes de la misma**

![](./assets/resource%20readme/pag%208.png)

## **La Primer Vista con la que se recibe al usuario es la vista del post sin loguear, esta debe conducir al usuario a iniciar seción o a explorar en los detalles de cada uno pero no a crear post**
![](./assets/resource%20readme/pag1.png)

## La segunda Vista es la vista de iniciar Sesión la cual es un formulario par ael usuario para autorisar a modo de simulación un sign up para entrar ala pagina como usuario registrado. Esta vista debe conducir al usuario a la pagina con Log in
![](./assets/resource%20readme/pag%202.png)
## Pagina del Post con Ususario Registrado, En esta pagina el usuario puede recorrer el sitio en su totalidad crear post log out y el aside derecho aparece con una imagen de forma aleatoria
![](./assets/resource%20readme/pag%203.png)
![](./assets/resource%20readme/pag%204.png)
![](./assets/resource%20readme/pag%205.png)
![](./assets/resource%20readme/pag%206.png)
![](./assets/resource%20readme/pag%20%207.png)



