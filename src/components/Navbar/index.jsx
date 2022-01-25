import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget";
import "./style.css"


function Navbar(){
    return(
        <div className="menu">
            <img src={logo}/>
            <ul className="menu__lista">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default Navbar;