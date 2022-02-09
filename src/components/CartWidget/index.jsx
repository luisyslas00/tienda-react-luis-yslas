import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import carritoLogo from "../../assets/cart-icon.png"
import { CartContext } from "../../context/cartContext";
import "./style.css"

function CartWidget(){
    // const {cart} = useContext(CartContext);

    // Contador Carrito de todos los productos
    // const [productosCarrito, setProductosCarrito]= useState(0);
    
    // for( let i=0;i<cart.length;i++){
    //     let totalDeUnProducto = (cart[i].quantity)
    //     setProductosCarrito(totalDeUnProducto)
    // }
    
    return(
    <div className="botonCarrito">
        <Link to='cart'>
            <img src={carritoLogo} />
            {/* <p>{productosCarrito}</p> */}
        </Link>
    </div>
    )
}

export default CartWidget;