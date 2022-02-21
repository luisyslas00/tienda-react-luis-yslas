import { Link } from "react-router-dom";
import tiendaCelulares from "../assets/tiendadecelulares.png"

const HomePage = () => {
    
    return(
        <div className="contenedorHomePage">
            <h1 className="tituloPage">¡Compra tu celular en nuestra online!</h1>
            <Link to='/products'><img src={tiendaCelulares} alt="tienda de celulares" className="imgTienda"/></Link>
        </div>
    )
}

export default HomePage;