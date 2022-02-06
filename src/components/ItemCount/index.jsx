import "./style.css";

function ItemCount({contador,setContador}){ 
    const sumarClick = () => {
        contador >= 0 ? setContador(contador + 1) : setContador(contador);
      };
    const restarClick = () => {
      contador <=0 ? setContador(contador) : setContador(contador - 1);
    };

    // const resetClick = () => {
    //   setContador(1);
    // };

    return(
      <>
        <div className="itemCount">
            <button onClick={restarClick} className="btnContador">-</button>
            <p>{contador}</p>
            <button onClick={sumarClick} className="btnContador">+</button>
        </div>
      </>
    )
}

export default ItemCount;