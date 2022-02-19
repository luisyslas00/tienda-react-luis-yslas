import cargando from "../../assets/cargando.gif"
import { useEffect, useState } from "react";
import Item from "../Item";
import { getFirestore } from "../../firebase";

// const JSONURL = 'http://localhost:3001/productos';

function ItemList(){
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError]=useState(null)

    useEffect(()=>{
        //Traemos la base de datos
        const db = getFirestore()
        //Apuntamos a la colección
        const productosCollection = db.collection('productos')
        //Usamos el método get a la collection
        const getDataFromFirestore = async () =>{
            setIsLoading(true)
            try{
            const response = await productosCollection.get()
            //Vemos si está vacio
            if(response.empty){
                console.log("Está vacio")
            }
            setProducts(response.docs.map((doc)=>({...doc.data(), id: doc.id})))
            }
            catch{
                setError(error);
            }
            finally{
                setIsLoading(false)
            }
        }
        getDataFromFirestore()
    },[]);
    if(isLoading){
        return(
            <img className="imgCargando" src={cargando}/>
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