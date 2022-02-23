import "./style.css";

function ItemCount({contador,setContador}){
  //Función sumar contador
  const sumarClick = () => {
    contador >= 0 ? setContador(contador + 1) : setContador(contador);
  };
  //Función restar contador
  const restarClick = () => {
    contador <=0 ? setContador(contador) : setContador(contador - 1);
  };

  return(
    <>
      <div className="itemCount">
          <button onClick={restarClick} className="btnContador restar">-</button>
          <p>{contador}</p>
          <button onClick={sumarClick} className="btnContador sumar">+</button>
      </div>
    </>
  )
}

export default ItemCount;