import { Link } from "react-router-dom";
import tiendaCelulares from "../assets/tiendadecelulares.png"
import appleLogo from "../../src/assets/applelogo.png"
import samsungLogo from "../../src/assets/samsunglogo.png"
import motorolaLogo from "../../src/assets/motorolalogo.png"
import tclLogo from "../../src/assets/tcllogo.png"

const HomePage = () => {
    
    return(
        <div className="contenedorHomePage">
            <h1 className="tituloPage">¡Compra tu celular en nuestra tienda online!</h1>
            <Link to='/products'><img src={tiendaCelulares} alt="tienda de celulares" className="imgTienda"/></Link>
            <h2>Marcas</h2>
            <div className="contenedorMarcas">
                <div className="contenedorMarcas__imagen">
                    <img src={appleLogo} alt="Apple"/>
                </div>
                <div className="contenedorMarcas__imagen">
                    <img src={samsungLogo} alt="Samsung"/>
                </div>
                <div className="contenedorMarcas__imagen">
                    <img src={motorolaLogo} alt="Motorola"/>
                </div>
                <div className="contenedorMarcas__imagen">
                    <img src={tclLogo} alt="TCL"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;