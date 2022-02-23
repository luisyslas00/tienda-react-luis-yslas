import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { getFirestore } from "../firebase";

const PedidoPage = () => {
    const {cart} = useCart();
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    const itemsOrdenados = order.items
   
    useEffect(() => {
        const db = getFirestore();
        db.collection("orders")
        .doc(orderId)
        .get()
        .then((res) => setOrder({ id: res.id, ...res.data() }));
        }, [orderId]);
            
        if (!order.id) {
            return <p>Cargando...</p>;
        }
        return (
            <div className="contenedorPedido">
                <h1>Gracias por su compra, {order.buyer.name}</h1>
                <p>Lo contactaremos dentro de las próximas 48hs, con los datos asignados:</p>
                <p>Teléfono: {order.buyer.phone}</p>
                <p>Correo Electrónico: {order.buyer.mail}</p>
                <h2>Detalle de su compra:</h2>
                {itemsOrdenados.map((pedido)=>{
                    return (
                        <div className="productoPedido" key={pedido.id}>
                            <p>{pedido.nombre}</p>
                            <img src={pedido.imagen} alt={pedido.nombre}/>
                            <p>${pedido.precio} por unidad</p>
                            <p>Cantidad: {pedido.cantidad}</p>
                            <p>Subtotal: ${pedido.cantidad*pedido.precio}</p>
                        </div>
                    )
                })}
                <p>Total: ${order.total}</p>
            </div>
        );
}

export default PedidoPage;