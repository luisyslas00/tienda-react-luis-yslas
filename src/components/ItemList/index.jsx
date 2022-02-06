import cargando from "../../assets/cargando.gif"
import { useEffect, useState } from "react";
import Item from "../Item";

const JSONURL = 'http://localhost:3001/productos';

function ItemList(){
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError]=useState(null)

    useEffect(()=>{
        setIsLoading(true);
        fetch(JSONURL)
        .then((response)=>response.json())
        .then((json) => setProducts(json))
        .catch((err)=>setError(err))
        .finally(()=>setIsLoading(false))
    },[]);
    if(isLoading){
        return(
            <img src={cargando}/>
        )
    }else if(error){
        return(
            <h2>Disculpe, ha habido un error {error.message}</h2>
        )
    }else{
        return(
            <>
                {products.map((product)=> {
                return <Item  key={product.id} product={product}/>;
                })}
            </>
        )
    }
}

export default ItemList;