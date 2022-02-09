import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import carritoLogo from "../../assets/cart-icon.png"
import { CartContext } from "../../context/cartContext";
import "./style.css"

function CartWidget(){
    const {cart,totalQty} = useContext(CartContext);
    
    return(
    <div className="botonCarrito">
        <Link to='cart'>
            <img src={carritoLogo} />
            <p>{totalQty()}</p>
        </Link>
    </div>
    )
}

export default CartWidget;