import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        const newItem = { item, quantity };
        const isIncart = cart.find((product) => product.id === newItem.id);
        if(!isIncart){
            setCart((prevState) => [...prevState, newItem]);
            console.log("Añadido al carrito")
        }else{
            console.log("Ya está en el carrito")
        }
    };

    //PrecioTotal
    // const totalPurchase = () =>{
    //     return cart.reduce ((contador, product)=> contador+ product.price * product.quantity, 0)
    // }
    // const totalPurchase = () => {
    //     let total = 0;
    //     cart.forEach(element => {
    //         let subTotal = element.quantity * element.item.price;
    //         total = total + subTotal;
    //     });
    //     return total;
    // }

    const deleteItem = (id) => {
        setCart((prev)=>prev.filter((element)=>element.item.id!==id));
    }; 

    const clearAll = () => {
        setCart([]);
    };
    const totalQty = () => {      
        return cart.reduce((contador,product) =>  contador +  product.quantity, 0 ) 
    }

    return(
        <CartContext.Provider value={{cart, addItem , deleteItem, clearAll, totalQty} }>
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
