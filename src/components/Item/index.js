import ItemCount from "../ItemCount/index.js";
import "../Item/style.css"

 const Item = ({product})=>{
    return(
        <div className="productContainer">
            <p className="productContainer__nombre">{product.nombre}</p>
            <img src={product.imagen}/>
            <p className="productContainer__precio">Precio: ${product.precio}</p>
            <p className="productContainer__detalles">{product.detalles}</p>
            <ItemCount/>
            <button onClick={product.id} className="productContainer__btn">Agregar Al Carrito</button>
        </div>
    )
 }

 export default Item;

// function Item(props){
//     return(
//         <div className="productContainer">
//             <p className="productContainer__nombre">{props.nombre}</p>
//             <img src={props.imagen}/>
//             <p className="productContainer__precio">Precio: ${props.precio}</p>
//             <p className="productContainer__detalles">{props.detalles}</p>
//             <ItemCount/>
//             <button onClick={props.id} className="productContainer__btn">Agregar Al Carrito</button>
//         </div>
//     )
// }

// export default Item;
