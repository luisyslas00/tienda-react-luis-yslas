import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../context/cartContext";
import { getFirestore } from "../firebase";

const CartPage = () => {
    const {cart ,deleteItem,clearAll,precioTotal} = useContext(CartContext);
    let navigate = useNavigate()
    //Notificación
    const notify = () => toast.warn('Complete el formulario!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const carritoVacio = () => toast.error('No hay productos en el carrito', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    //Creo Estados para el formulario
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [mail,setMail] = useState("")
    //Envio de formulario
    const handleSubmit = async (evt) =>{
        evt.preventDefault()
        if(!name || !phone || !mail){
            notify()
            return false
        }
        if(precioTotal() == 0){
            carritoVacio()
            return false
        }
        const newOrder = {
            buyer:{name, phone, mail},
            items: [...cart],
            total:precioTotal()
        }
        const db = getFirestore();
        const ordersCollection = db.collection("orders");
        const response = await ordersCollection.add(newOrder);
        navigate(`/pedidoexitoso/${response.id}`);
        clearAll()
    }

        return(
            <>  
                <div className="contenedorCarrito">
                    <div className="contenedorItems">
                        <h1>Carrito</h1>
                        {cart.length === 0 ? <h3>No hay productos en el carrito</h3> :null}
                        {cart.map((compra)=>{
                            const totalPrecioProducto = compra.precio*compra.cantidad 
                            return (
                                <div className="contenedorProductoCarrito" key={compra.id}>
                                    <p>{compra.nombre}</p>
                                    <img src={compra.imagen} alt={compra.nombre}/>
                                    <p>${compra.precio}</p>
                                    <p>x{compra.cantidad}</p>
                                    <p>${totalPrecioProducto}</p>
                                    <button className="btnEliminar" onClick={()=>deleteItem(compra.id)}>Eliminar</button>
                                </div>
                            )
                        })}
                        <h3>Total a pagar: ${precioTotal()}</h3>
                        <button className="btnVaciar" onClick={()=>clearAll()}>Vaciar Carrito</button>
                    </div>
                    <div className="contenedorFormulario">
                        <h2>Complete con sus datos</h2>
                        <form className="formulario" onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input id="name" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            <label htmlFor="phone">Telefono</label>
                            <input id="phone" type="number" phone="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            <label htmlFor="mail">Correo electrónico</label>
                            <input id="mail" type="text" mail="mail" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                            <input className="btnEnviar"  type="submit" value="Finalizar pedido"/>
                        </form>
                        <ToastContainer/>
                    </div>
                   
                </div>
            </>
        )
}

export default CartPage;