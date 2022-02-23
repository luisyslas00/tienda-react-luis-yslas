import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    //Agregar al carrito
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
    //Eliminar del carrito
    const deleteItem = (id) => {
        setCart((prev)=>prev.filter((element)=>element.id!==id));
    }; 
    //Vaciar carrito
    const clearAll = () => {
        setCart([]);
    };
    //Total productos
    const totalQty = () => {      
        return cart.reduce((contador,product) =>  contador +  product.cantidad, 0 ) 
    }
    //Precio Total
    const precioTotal = () =>{
        let total = 0;
        cart.forEach((item)=>{
            total += item.precio * item.cantidad
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