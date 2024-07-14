# AluraGeek

AluraGeek es un proyecto desarrollado como parte del Challenge de Alura Latam 2024. Este proyecto permite la gestión de productos, donde los usuarios pueden ver y agregar productos a la lista.

## Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
    ```
    git clone https://github.com/shmariajesus/alurageek.git
    ```

2. Navega al directorio del proyecto:
    ```
    cd alurageek
    ```

3. Instala las dependencias:
    ```
    npm install
    ```

4. Inicia el servidor JSON:
    ```
    npm start
    ```

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Podrás ver la lista de productos existentes y utilizar el formulario para agregar nuevos productos.
3. Los productos se pueden eliminar haciendo clic en el botón de borrar.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
```
alurageek/
├── assets/
│   ├── favicon.png
│   ├── corazones.png
│   └── boton-borrar.png
├── css/
│   └── style.css
├── js/
│   ├── controllers/
│   │   └── main.js
│   └── services/
│       └── product-services.js
├── database/
│   └── db.json
├── index.html
└── README.md
```

## Dependencias

El proyecto utiliza las siguientes dependencias:

- json-server: Para crear una API REST falsa.
- Live Server: Para cargar index.html de forma local

---

Desarrollado por Maria Jesus Silva para Alura Latam 2024.
