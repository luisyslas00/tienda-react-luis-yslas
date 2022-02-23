import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ItemCount from "../ItemCount"
import "../ItemDetail/style.css"
import cargando from  "../../assets/cargando.gif";
import { useCart } from "../../context/cartContext"
import { getFirestore } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetails = () =>{
    const {addItem}= useCart()
    const [contador,setContador] = useState(0);
    const {productId}= useParams()
    const [product,setProduct] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    //Función Toastify
    const notify = () => toast.success("Producto agregado!", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;
    //Función resetear contador
    const resetClick = () => {
      setContador(0);
    };

    useEffect(() => {
        const db = getFirestore();
        const productosCollection = db.collection('productos')
        const productoElegido = productosCollection.doc(productId)
        setIsLoading(true)
        productoElegido.get().then((response)=>{
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
                        <p>Cantidad</p>
                        <ItemCount contador={contador} setContador={setContador}/>
                        <div className="contenedorBtnCompra">
                            <button onClick={()=>{notify();addItem(product,contador);resetClick()}} className="product__btn btnAgregarAlCarrito">Agregar Al Carrito</button>
                            <button onClick={()=>navigate(`/cart`)} className="product__btn btnFinalizarCompra">Finalizar Compra</button>
                        </div>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        )
}
export default ItemDetails;