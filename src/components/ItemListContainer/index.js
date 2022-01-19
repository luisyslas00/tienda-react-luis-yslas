import ItemList from "../ItemList/index.js";
import "../ItemListContainer/style.css"

function ItemListContainer(){
    return(
        <div className="productsList">
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;