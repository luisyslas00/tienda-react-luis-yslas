import cargando from "../../src/assets/cargando.gif"
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { getFirestore } from "../firebase";
import { Link, useParams } from "react-router-dom";
import appleLogo from "../../src/assets/applelogo.png"
import samsungLogo from "../../src/assets/samsunglogo.png"
import motorolaLogo from "../../src/assets/motorolalogo.png"
import tclLogo from "../../src/assets/tcllogo.png"

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
    // if(isLoading){
    //     return(
    //         <img className="imgCargando" src={cargando}/>
    //     )
    // }else if(error){
    //     return(
    //         <h2>Disculpe, ha habido un error {error.message}</h2>
    //     )
    // }else{
        return(
            <>
                <h1>Productos</h1>
                <div className="categoryProducts">
                    <Link to='/products'><p className="todosCategory">Todos</p></Link>
                    <Link to='/category/motorola'><img className="imgLogoMarca" src={motorolaLogo}/></Link>
                    <Link to='/category/samsung'><img className="imgLogoMarca" src={samsungLogo}/></Link>
                    <Link to='/category/apple'><img className="imgLogoMarca" src={appleLogo}/></Link>
                    <Link to='/category/tcl'><img className="imgLogoMarca" src={tclLogo}/></Link>
                </div>
                <div className="productsList">
                    {products.map((product)=> {
                    return <Item  key={product.id} product={product}/>;
                    })}
                </div>
            </>
        )
    // }
}

export default CategoryPage;