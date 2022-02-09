import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {
    const {cart ,deleteItem,clearAll} = useContext(CartContext);

    // setPrecioTotal((precioTotal) => [...precioTotal, totalPrecioProducto]);

        return(
            <>
                <h1>Carrito</h1>
                {cart.length === 0 ? <h3>No Hay productos en el carrito</h3> :null}
                {cart.map((compra)=>{
                    const totalPrecioProducto = compra.item.precio*compra.quantity 
                    return (
                        <div  key={compra.item.id}>
                            <p>Producto: {compra.item.nombre}</p>
                            <p>${compra.item.precio}</p>
                            <p>Cantidad: {compra.quantity}</p>
                            <p>${totalPrecioProducto}</p>
                            <button onClick={()=>deleteItem(compra.item.id)}>Eliminar</button>
                        </div>
                    )
                })}
                <p></p>
                <button onClick={()=>clearAll()}>Vaciar Carrito</button>
            </>
        )
}

export default CartPage;