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
        }
        getDataFromFirestore()
    },[categoryId]);
    return(
        <>
            <h1 className="tituloPage">Productos</h1>
            <div className="categoryProducts">
                <Link to='/products'><p className="todosCategory">Todos</p></Link>
                <Link to='/category/motorola'><img className="imgLogoMarca" src={motorolaLogo} alt="logo Motorola"/></Link>
                <Link to='/category/samsung'><img className="imgLogoMarca" src={samsungLogo} alt="logo Samsung"/></Link>
                <Link to='/category/apple'><img className="imgLogoMarca" src={appleLogo} alt="logo Apple"/></Link>
                <Link to='/category/tcl'><img className="imgLogoMarca" src={tclLogo} alt="logo TCL"/></Link>
            </div>
            <div className="productsList">
                {products.map((product)=> {
                return <Item  key={product.id} product={product}/>;
                })}
            </div>
        </>
    )
}

export default CategoryPage;