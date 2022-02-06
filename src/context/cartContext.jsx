import { createContext, useContext, useState } from "react";


export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
   
    const addItem = (item,quantity) => {
        const newItem = { item, quantity};
        console.log("Se agregó al carrito:", newItem)
        setCart((prevState)=>[...prevState, newItem]);
    };

    const hola = () => {
        return console.log("hola")
    }
    
    const deleteItem = (id) => {
        setCart((prev)=>prev.filter((element)=>element.item.id===id));
    };  
     
    return(
        <CartContext.Provider value={ cart, addItem , deleteItem, hola}>
             {children}
        </CartContext.Provider>
    )
} 

export const useCart = () => useContext(CartContext);

// const [productos,setProductos] = useState([]);
    // const [err,setError] = useState([]);
    // const [isLoading,setIsLoading] = useState([]);
    // const JSONURL = "http://localhost:3001/productos"
    
    // useEffect(()=>{
    //     setIsLoading(true);
    //     fetch(JSONURL)
    //     .then((response)=>response.json())
    //     .then((json) => setProductos(json))
    //     .catch((err)=>setError(err))
    //     .finally(()=>setIsLoading(false))
    // },[]);
   
    // const agregarAlCarrito = (id)=>{
        // const producto = cart.filter((producto) => producto.id === id)
        // setCart((prevState)=>([...prevState, {item,quantity}]));
    // }
 // const agregarAlCarrito = (id) => {
    //     const producto = productos.filter((producto) => producto.id === id);
    //     setCart([...cart, ...producto]);
    // };
  // const delItem = (id) => {
    //     const productos = cart.filter((producto) => producto.id !== id);
    //     setCart(productos);
    // };  