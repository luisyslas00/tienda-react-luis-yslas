import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h1>Lo sentimos, la página no fue encontrada...</h1>
            <Link to='/'>Volver al Home</Link>
        </div>
    )
}

export default NotFound;