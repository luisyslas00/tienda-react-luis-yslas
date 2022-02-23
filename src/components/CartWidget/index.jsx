import { Link } from "react-router-dom";
import carritoLogo from "../../assets/cart-icon.png"
import { useCart } from "../../context/cartContext";
import "./style.css"

function CartWidget(){
    //Total productos en Carrito
    const {totalQty} = useCart();
    
    return(
    <div className="botonCarrito">
        <Link to='cart'>
            <img src={carritoLogo} alt="Tienda celulares"/>
            <p>{totalQty()}</p>
        </Link>
    </div>
    )
}

export default CartWidget;