
export const PRODUCTS=[
    {
        id:1,
        nombre:"Moto Edge 20 Pro",
        imagen:"./motoedge20pro.png",
        precio:99.999,
        detalles:"No te pierdas de un solo momento con el nuevo Motorola Moto Edge 20 Pro. Con su cámara de 108+16+8 Mp; sacá fotos nítidas y claras tanto de día como de noche. El Motorola Moto Edge 20 Pro Cable HDMI posee un procesador Octa-Core 3.2GHz para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 256 GB. Incluye cable HDMI"
    },
    {
        id:2,
        nombre:"Moto E40", 
        imagen:"./motoe40.png",
        precio:21.499,
        detalles:"Procesador Octa-Core 1.6 GHz para que estés al día con todas las aplicaciones. " 
    },
    {
        id:3,
        nombre:"Moto E7i Power", 
        imagen:"./motoe7ipower.png", 
        precio:29.999, 
        detalles:"Memoria interna de 64 GB y expandible con una MicroSd hasta 256GB."
    },
    {
        id:4,
        nombre:"Samsung S21 Ultra", 
        imagen:"./s21ultra5g.png", 
        precio:204.499, 
        detalles:"Memoria interna de 256 GB."
    },
]

export function getProducts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(PRODUCTS),2000)
    });
};

export function getProductsDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(PRODUCTS),2000)
    });
};