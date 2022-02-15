import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { getFirestore } from "../firebase";

const PedidoPage = () => {
    const {cart} = useCart();
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    console.log(cart)
    
    useEffect(() => {
        const db = getFirestore();
        db.collection("orders")
        .doc(orderId)
        .get()
        .then((res) => setOrder({ id: res.id, ...res.data() }));
        }, [orderId]);

        function itemsOrders(){
            const ordenesCadena = order.items
            for( let i=0;i<ordenesCadena.length;i++){
                return(
                    <>
                        <p>Producto:{order.items[i].nombre}</p>
                        <p>Cantidad:{order.items[i].cantidad}</p>
                        <p>Precio por Unidad:{order.items[i].precio}</p>
                        <img src={order.items[i].imagen} alt={order.items[i].nombre}/>
                    </>
                )
            }
        }
            
        if (!order.id) {
            return <p>Cargando...</p>;
        }
        return (
            <div>
                <h1>Gracias por su compra, sr/sra. {order.buyer.name}</h1>
                <p>Le comunicaremos dentro de las próximas 48hs, con los datos asignados:</p>
                <p>Teléfono: {order.buyer.phone}</p>
                <p>Correo Electrónico: {order.buyer.mail}</p>
                <h2>Detalle de su compra:</h2>
                <>{itemsOrders()}</>
                <p>Total: ${order.total}</p>
            </div>
        );
}

export default PedidoPage;