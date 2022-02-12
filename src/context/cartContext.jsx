import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    
    const addItem = (item,quantity) =>{
        const newCart = {...item, cantidad: quantity,};
        const IsInCart = (idItem)=>{
            return cart.some((prod)=>prod.id == idItem);
        }
        if(!IsInCart(item.id)){
            setCart([...cart, newCart]);
        }else{
            const newCarts = cart.map((cartItem)=>{
                const sumTotal = cartItem.cantidad + quantity;
                if(cartItem.id === item.id){
                    return {...cartItem,cantidad: sumTotal};
                }else{
                    return cartItem;
                }
            })
            setCart(newCarts);
        }
    }

    const deleteItem = (id) => {
        setCart((prev)=>prev.filter((element)=>element.id!==id));
    }; 

    const clearAll = () => {
        setCart([]);
    };
    const totalQty = () => {      
        return cart.reduce((contador,product) =>  contador +  product.cantidad, 0 ) 
    }

    const precioTotal = () =>{
        let total = 0;
        cart.forEach((item)=>{
            total += item.precio * item.cantidad
            console.log(total)
        })
        return total
    }

    return(
        <CartContext.Provider value={{cart, addItem , deleteItem, clearAll, totalQty, precioTotal} }>
             {children}
        </CartContext.Provider>
    )
} 

export const useCart = () => useContext(CartContext);