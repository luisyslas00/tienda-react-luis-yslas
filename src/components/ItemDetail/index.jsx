import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ItemCount from "../ItemCount"
import "../ItemDetail/style.css"
import cargando from  "../../assets/cargando.gif";
import { CartContext, useCart } from "../../context/cartContext"
import { getFirestore } from "../../firebase";

const ItemDetails = () =>{
    const {addItem}= useCart()
    const [contador,setContador] = useState(0);
    const {productId}= useParams()
    const [product,setProduct] = useState()
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    
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
        //Fetch en JSON
        // const URL = `http://localhost:3001/productos/${productId}`;
        // setIsLoading(true);
        // fetch(URL)
        // .then((res) => res.json())
        // .then((data) => setProduct(data))
        // .finally(() => setIsLoading(false));
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
                        <button onClick={() =>addItem(product,contador)} className="product__btn btnAgregarAlCarrito">Agregar Al Carrito</button>
                        <button onClick={()=>navigate(`/cart`)} className="product__btn btnFinalizarCompra">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        )
}
export default ItemDetails;