import "./style.css"

 const Item = ({product})=>{
    return(
        <div className="productContainer">
            <p className="productContainer__nombre">{product.nombre}</p>
            <img src={product.imagen}/>
            <p className="productContainer__precio">Precio: ${product.precio}</p>
            <button onClick={product.id} className="productContainer__btn">Ver más</button>
        </div>
    )
 }

 export default Item;