## Introducción

Este proyecto es una propuesta para la `Prueba técnica Frontend Developer Merqueo`, se realizó con `next` js un framework construido sobre `React` que nos ayuda a instalar las dependencias que necesitamos para crear la aplicación en React.

La aplicación que se creó sirve para realizar publicaciones de comentarios de los usuarios; después de publicado se puede reaccionar y comentar la publicación.

Se realizó un escenario para poder simular diferentes usuarios que puedan interactuar con la aplicación, estos se despliegan con el botón hamburguesa del header y así poder cambiar de usuario e interactuar con las publicaciones hechas y también poder realizar nuevas publicaciones.

## Como correr el proyecto

Para `correr` el proyecto en desarrollo:

```bash
npm run dev
```

Para correr el proyecto para producción primero ejecutamos el `build`

```bash
npm run build
```

Después ejecutamos el `start`

```bash
npm run start
```

Abrimos [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

## Arquitectura

### HTML

En la estructura `HTML` se utilizaron etiquetas semánticas para poder adquirir todas la propiedad que por defecto tienes dichas etiquetas, también se utilizó etiqueta img que nos ayuda a tener alternative text para los lectores de pantalla.
Se utilizó una sola etiqueta `h1` para colocar el título del contenido.
También se agregaron los `meta` tags que nos ayuda a un mejor renderizado de nuestra aplicación.

### CSS

Para los estilos se utilizó un pre-procesador llamado `SASS` que nos ayuda a utilizar variables, mixin, funciones para que nuestro código sea más ordenado, escalable y mantenible.
Se utilizó un sass para cada componente ya que next nos ayuda a independizar cada componente con un style.module.scss y así tener un `scope` de cada uno.
Los estilos también se utilizaron para realizar las animaciones en cada cambio de estado de los componentes cuando el usuario interactúa con la aplicación.

### JS/React

Se dividió el proyecto en componentes que se encuentran en la carpeta `components` estas contienen el .js conde está alojado cada componente con sus eventos, lógica y estados para cambiar controladamente los componentes, en el .scss se encuentran los estilos para ese componente.
En la carpeta pages se encuentra el .js principal donde está establecido la lógica del contexto que expone los datos, el llamado de los componentes que se van a renderizar y la función de guardar en el `localStorage` cada cambio de información que nos interesa en nuestra aplicación.

Se utilizaron `hooks` para realizar nuestros cambios de estados y así alterar los componentes, y también para poder conectarlo con el contexto.

Se utilizó un contexto para poder realizar los cambios de estados controlados que requieren los componentes para su ciclo de vida.

### Datos

En la carpeta `data` se encuentra un archivo `seed.js` donde se encuentra los datos iniciales de la aplicación, los cuales se alojan en el `localStorage` cuando corremos nuestra aplicación, también podemos verificar la estructura de datos que se utilizó para almacenar la información, ya que esta se necesita para poder guardarla en el `localStorage` y poder visualizar la información de forma correcta.

También encontramos unos usuarios para poder simular la interacción en la aplicación ya sea publicando nuevos estados o comentarios y también reaccionando a las publicaciones.

## Unit test

Para las pruebas unitarias se utilizó el marco de prueba o librería `jest`, la utilizamos para probar los estados del componente `Btn` después de renderizarlo; con más tiempo se puede comprobar todos los criterios de aceptación e incluso poder hacer `end2end` testing que nos ayuda a probar la aplicación haciendo una simulación del renderizado del navegador.
