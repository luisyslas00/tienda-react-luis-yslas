import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {
    const {cart ,deleteItem} = useContext(CartContext);
        return(
            <div>
                <h1>Carrito</h1>
                {cart.map((compra)=>{
                    return (
                        <div>
                            <p>{compra.item.name}</p>
                            <p>{compra.quantity}</p>
                            <button onClick={()=>deleteItem(compra.item.id)}>Eliminar</button>
                        </div>
                    )
                })}
            </div>
        )
}

export default CartPage;