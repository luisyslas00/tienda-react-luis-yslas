import motoE20 from "./assets/motoedge20pro.png"
import motoE40 from "./assets/motoe40.png"
import motoE7i from "./assets/motoe7ipower.png"
import s21ultra from "./assets/s21ultra5g.png"

export const PRODUCTS=[
    {
        id:1,
        nombre:"Moto Edge 20 Pro",
        imagen:{motoE20},
        precio:99.999,
        detalles:"Cámara de 108+16+8 Mp."
    },
    {
        id:2,
        nombre:"Moto E40", 
        imagen:{motoE40},
        precio:21.499,
        detalles:"Procesador Octa-Core 1.6 GHz para que estés al día con todas las aplicaciones." 
    },
    {
        id:3,
        nombre:"Moto E7i Power", 
        imagen:{motoE7i}, 
        precio:29.999, 
        detalles:"Memoria interna de 64 GB y expandible con una MicroSd hasta 256GB."
    },
    {
        id:4,
        nombre:"Samsung S21 Ultra", 
        imagen:{s21ultra}, 
        precio:204.499, 
        detalles:"Memoria interna de 256 GB."
    },
]

export function getProducts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(PRODUCTS),2000)
    });
};