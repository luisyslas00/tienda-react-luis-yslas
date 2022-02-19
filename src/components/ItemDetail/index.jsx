import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ItemCount from "../ItemCount"
import "../ItemDetail/style.css"
import cargando from  "../../assets/cargando.gif";
import { CartContext, useCart } from "../../context/cartContext"
import { getFirestore } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetails = () =>{
    const {addItem}= useCart()
    const [contador,setContador] = useState(0);
    const {productId}= useParams()
    const [product,setProduct] = useState()
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    const notify = () => toast.success("Producto agregado!", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;

    useEffect(() => {
        const db = getFirestore();
        const productosCollection = db.collection('productos')
        const productoElegido = productosCollection.doc(productId)
        setIsLoading(true)
        productoElegido.get().then((response)=>{
            //Para comprobar si el producto existe
            // if(!response.exits){
            //     console.log("El producto no existe")
            // }
            setProduct({...response.data(),id: response.id})
            
        })
        .finally(()=>setIsLoading(false))
    },[productId]);

    if(isLoading || !product) return <img className="imgCargando" src={cargando}/>;

        return(
            <div className="itemContainer">
                <h2>{product.nombre}</h2>
                <div className="itemContainer__details">
                <img src={product.imagen}/>
                    <div className="itemContainer__details--desc">
                        <p>{product.detalles}</p>
                        <p className="product__precio">Precio: ${product.precio}</p>
                        <ItemCount contador={contador} setContador={setContador}/>
                        <button onClick={()=>{notify();addItem(product,contador)}} className="product__btn btnAgregarAlCarrito">Agregar Al Carrito</button>
                        <button onClick={()=>navigate(`/cart`)} className="product__btn btnFinalizarCompra">Finalizar Compra</button>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        )
}
export default ItemDetails;