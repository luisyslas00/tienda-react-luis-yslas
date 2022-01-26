import { Link } from "react-router-dom";
import carritoLogo from "../../assets/cart-icon.png"
import "./style.css"

function CartWidget(){
    return(
    <div className="botonCarrito">
        <Link to='cart'>
            <img src={carritoLogo} />
            <p>{0}</p>
        </Link>
    </div>
    )
}

export default CartWidget;