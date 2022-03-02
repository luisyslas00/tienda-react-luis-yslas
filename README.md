# Proyecto Tienda Celular

Estoy trabajando en un proyecto de tienda de celulares (ficticio), con sus diferentes páginas (Home, Nosotros, Productos, Contacto, Carrito, además le agregué una en caso de no ser encontrada "Not Found"). Sitio web [AQUI](https://luisyslas00.github.io/tienda-react-luis-yslas/)

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
