import carritoLogo from "../../assets/cart-icon.png"
import "../CartWidget/style.css"

function CartWidget(){
    return(
    <div className="botonCarrito">
        <img src={carritoLogo} />
        <p>{0}</p>
    </div>
    )
}

export default CartWidget;