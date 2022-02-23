# Proyecto Tienda Celular

Estoy trabajando en un proyecto de tienda de celulares (ficticio), con sus diferentes páginas (Home, Nosotros, Productos, Contacto, Carrito, además le agregué una en caso de no ser encontrada "Not Found").

## HomePage
Es simple, importé imágenes del assets, lo único interactivo es la imagen principal que te direcciona a la página de productos. Usando `Link`

## AboutPage
También simple, tanto HomePage como AboutPage las hice para que el Navbar pueda ser usado, quizás me falta agregarle contenido, pero no era la idea tampoco llenar de cosas que no iba a usar con React.

## ProductsPage
Hice una lista de los productos, en lo cuál se puede filtrar usando las imágenes de los logos de las distintas marcas. 
También al acceder a los productos se puede ver ItemDetails, cuenta con un contador y botones de agregar al carrito y finalizar compra.
Usé [React-toastify](https://fkhadra.github.io/react-toastify/introduction/) para la animación de la misma. Cada vez que agrego un producto.

## ContactPage
Se puede enviar una consulta, redirecciona a otra página (ConsultaPage) que te confirma el envío de la misma.

## CartPage
Se visualiza en 2 partes, los items del carrito y el formulario de compra.
En caso de tener productos en el carrito y no completar el formulario, sale un aviso de que debe "Completar el Formulario", y en viceversa "No hay productos en el carrito".
Se puede eliminar productos o el carrito por completo. 
Una vez enviado, nos redirecciona a PedidoPage, en donde nos muestra nuestros datos, y los detalles de la compra realizada.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
