import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget";
import "./style.css"


function Navbar(){
    return(
        <div className="menu">
            <Link to='/'>
                <img src={logo}/>
            </Link>
            <ul className="menu__lista">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>Nosotros</Link></li>
                <li><Link to='products'>Productos</Link></li>
                <li><Link to='contact'>Contacto</Link></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default Navbar;