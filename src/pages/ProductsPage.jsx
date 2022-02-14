import { Link, useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import appleLogo from "../../src/assets/applelogo.png"
import samsungLogo from "../../src/assets/samsunglogo.png"
import motorolaLogo from "../../src/assets/motorolalogo.png"
import tclLogo from "../../src/assets/tcllogo.png"

const ProductsPage = () => {
    return(
        <div>
            <h1>Productos</h1>
            <div className="categoryProducts">
                    <Link to='/products'><p className="todosCategory">Todos</p></Link>
                    <Link to='/category/motorola'><img className="imgLogoMarca" src={motorolaLogo}/></Link>
                    <Link to='/category/samsung'><img className="imgLogoMarca" src={samsungLogo}/></Link>
                    <Link to='/category/apple'><img className="imgLogoMarca" src={appleLogo}/></Link>
                    <Link to='/category/tcl'><img className="imgLogoMarca" src={tclLogo}/></Link>
                </div>
            <ItemListContainer/>
        </div>
    )
}

export default ProductsPage;