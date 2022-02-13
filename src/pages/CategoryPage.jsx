import cargando from "../../src/assets/cargando.gif"
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { getFirestore } from "../firebase";
import { Link, useParams } from "react-router-dom";

function CategoryPage(){
    //Ver categorías
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError]=useState(null)
    const { categoryId } = useParams();

    useEffect(()=>{
        const db = getFirestore();
        let productosCollection;
        if (categoryId) {
          productosCollection = db
            .collection("productos")
            .where("categoryId", "==", categoryId);
        } else {
          productosCollection = db.collection("productos");
        }

        const getDataFromFirestore = async () =>{
            setIsLoading(true)
            try{
            const response = await productosCollection.get()
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
    },[categoryId]);
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
                <h1>Productos</h1>
                <ul>
                    <li><Link to='/products'>Todos</Link></li>
                    <li><Link to='/category/motorola'>Motorola</Link></li>
                    <li><Link to='/category/samsung'>Samsung</Link></li>
                </ul>
                <div className="productsList">
                    {products.map((product)=> {
                    return <Item  key={product.id} product={product}/>;
                    })}
                </div>
            </>
        )
    }
}

export default CategoryPage;