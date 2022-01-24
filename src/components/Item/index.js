import ItemCount from "../ItemCount/index.js";
import "../Item/style.css"

 const Item = ({product})=>{
    return(
        <div className="productContainer">
            <p className="productContainer__nombre">{product.nombre}</p>
            <img src={product.imagen}/>
            <p className="productContainer__precio">Precio: ${product.precio}</p>
          
            <ItemCount/>
            <button onClick={product.id} className="productContainer__btn">Agregar Al Carrito</button>
        </div>
    )
 }

 export default Item;