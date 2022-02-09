import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    

    const addItem = (item, quantity) => {
        const newItem = { item, quantity };
        setCart((prevState) => [...prevState, newItem]);
    //     if(cart.includes(newItem.item.id)){
    //         console.log('Ya está en el carrito')
    //     }else{           
    //         console.log('Se agregó al carrito')
    //     }
    
        //Acceso al ID
        // console.log(newItem.item.id)
    };

    //Otro intento función addItem
    // const addItem = (item,quantity) => {
    //     const newItem = { item, quantity };
    //     setCart((prev) => {
    //      const IsInACart = prev.find((i) => i.id === item.id);
    //       if (IsInACart) {
    //         return console.log("Ya está agregado")
    //       }
    //       return [...prev, newItem];
    //     });
    // };

    // const IsInACart = (id) => {
    //     const productos = cart.filter((producto) => producto.id === id);
    // }

    const deleteItem = (id) => {
        setCart((prev)=>prev.filter((element)=>element.item.id!==id));
    }; 

    const clearAll = () => {
        setCart([]);
    };
    
    return(
        <CartContext.Provider value={{cart, addItem , deleteItem, clearAll} }>
             {children}
        </CartContext.Provider>
    )
} 

export const useCart = () => useContext(CartContext);

//Lo que había hecho antes dentro de CartProvider

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