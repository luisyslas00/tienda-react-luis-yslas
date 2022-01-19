import React from "react";
import "../ItemCount/style.css";

function ItemCount(){
    const [contador,setContador] = React.useState(0);
    const sumarClick = () => {
        contador >= 0 ? setContador(contador + 1) : setContador(contador);
      };
      const restarClick = () => {
        contador <=0 ? setContador(contador) : setContador(contador - 1);
      };
    
    return(
        <div className="itemCount">
            <button onClick={restarClick} className="btnContador">-</button>
            <p>{contador}</p>
            <button onClick={sumarClick} className="btnContador">+</button>
        </div>
    )
}

export default ItemCount;