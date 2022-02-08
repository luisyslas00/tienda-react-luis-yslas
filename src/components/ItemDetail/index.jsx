import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ItemCount from "../ItemCount"
import "../ItemDetail/style.css"
import cargando from  "../../assets/cargando.gif";
import { useCart } from "../../context/cartContext"

const ItemDetails = () =>{
    const {addItem}= useCart()
    const [contador,setContador] = useState(0);
    const {productId}= useParams()
    const [product,setProduct] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        const URL = `http://localhost:3001/productos/${productId}`;
        setIsLoading(true);
        fetch(URL)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(() => setIsLoading(false));
    },[productId]);

    if(isLoading || !product) return <img src={cargando}/>;

        return(
            <div className="itemContainer">
                <h2>{product.nombre}</h2>
                <div className="itemContainer__details">
                {/* <img src={require(`../../../public/${product.imagen}`)}/> */}
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