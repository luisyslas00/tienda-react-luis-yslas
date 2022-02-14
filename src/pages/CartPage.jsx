import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {
    const {cart ,deleteItem,clearAll,precioTotal} = useContext(CartContext);
    console.log(cart)
        return(
            <>
                <h1>Carrito</h1>
                {cart.length === 0 ? <h3>No Hay productos en el carrito</h3> :null}
                {cart.map((compra)=>{
                    const totalPrecioProducto = compra.precio*compra.cantidad 
                    return (
                        <div  key={compra.id}>
                            <p>Producto: {compra.nombre}</p>
                            <img src={compra.imagen} alt={compra.nombre}/>
                            <p>${compra.precio}</p>
                            <p>Cantidad: {compra.cantidad}</p>
                            <p>${totalPrecioProducto}</p>
                            <button onClick={()=>deleteItem(compra.id)}>Eliminar</button>
                        </div>
                    )
                })}
                <h3>Total: ${precioTotal()}</h3>
                <button onClick={()=>clearAll()}>Vaciar Carrito</button>
            </>
        )
}

export default CartPage;