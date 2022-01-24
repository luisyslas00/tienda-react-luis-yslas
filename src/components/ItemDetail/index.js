import ItemCount from "../ItemCount"
import "../ItemDetail/style.css"

const ItemDetails = ({product}) =>{
    return(
        <div className="itemContainer">
            <h2>{product.nombre}</h2>
            <div className="itemContainer__details">
                <img src={product.imagen} />
                <div className="itemContainer__details--desc">
                    <p>{product.detalles}</p>
                    <p className="product__precio">Precio: ${product.precio}</p>
                    <ItemCount/>
                    <button onClick={product.id} className="product__btn">Agregar Al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;