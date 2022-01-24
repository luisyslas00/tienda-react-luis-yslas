import ItemDetails from "../ItemDetail/index.js";
import cargando from "../../assets/cargando.gif"
import { useEffect, useState } from "react";
import { getProductsDetails, PRODUCTS } from "../../baseDatos.js";

function ItemDetailsContainer(){
    const [productDetails,setProductDetails] = useState([])
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        getProductsDetails()
        .then((data)=>setProductDetails(data))
        .catch((error)=>console.error(error))
        .finally(()=>setIsLoading(false))
    },[]);

    return(
        <>
            {isLoading ? (
            <img src={cargando}/>
            ) :( 
                productDetails.map((product)=> <ItemDetails key={product.id} product={product}/>)
            )} 
        </>
    );
}

export default ItemDetailsContainer;