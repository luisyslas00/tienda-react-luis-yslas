import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "../components/ItemListContainer/style.css"
import { getFirestore } from "../firebase"

const ContactPage = () => {
    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [correo,setCorreo] = useState("")
    const [consulta,setConsulta] = useState("")
    let navigate = useNavigate()
    //Notificación
    const notify = () => toast.warn('Complete el formulario!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    //Envio Formulario
    const handleSubmit = async (evt) =>{
        evt.preventDefault()
        if(!nombre || !telefono || !correo || !consulta){
            notify()
            return false
        }
        const nuevaConsulta = {
            cliente:{nombre, telefono, correo, consulta},
        }
        const db = getFirestore();
        const consultasCollection = db.collection("consultas");
        const response = await consultasCollection.add(nuevaConsulta);
        navigate(`/consultaenviada/${response.id}`);
    }
    return(
        <div className="contenedorContacto">
            <h1 className="tituloPage">Contacto</h1>
            <form className="formularioContacto" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre y Apellido</label>
                <input id="nombre" type="text" nombre="nombre" onChange={(e)=>setNombre(e.target.value)}/>
                <label htmlFor="telefono">Telefono</label>
                <input id="telefono" type="number" telefono="telefono" onChange={(e)=>setTelefono(e.target.value)}/>
                <label htmlFor="correo">Correo electrónico</label>
                <input id="correo" type="text" correo="correo" onChange={(e)=>setCorreo(e.target.value)}/>
                <textarea consulta="consulta" placeholder="Escriba su consulta..." maxLength={350} onChange={(e)=>setConsulta(e.target.value)}></textarea>
                <input className="btnEnviar"  type="submit" value="Enviar"/>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default ContactPage;