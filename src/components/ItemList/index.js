import Item from "../Item/index.js";
import cargando from "../../assets/cargando.gif"
import { useEffect, useState } from "react";
import { getProducts, PRODUCTS } from "../../baseDatos.js";

function ItemList(){
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        getProducts()
        .then((data)=>setProducts(data))
        .catch((error)=>console.error(error))
        .finally(()=>setIsLoading(false))
    },[]);

    return(
        <>
            {isLoading ? (
            <img src={cargando}/>
            ) :( 
                products.map((product)=> <Item key={product.id} product={product}/>)
            )} 
        </>
    );
}

export default ItemList;