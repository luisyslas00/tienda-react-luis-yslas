import { Link, useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

const ProductsPage = () => {
    return(
        <div>
            <h1>Productos</h1>
            <ul>
                <li><Link to='/category/motorola'>Motorola</Link></li>
                <li><Link to='/category/samsung'>Samsung</Link></li>
            </ul>
            <ItemListContainer/>
        </div>
    )
}

export default ProductsPage;