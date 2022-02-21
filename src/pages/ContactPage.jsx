import "../components/ItemListContainer/style.css"

const ContactPage = () => {
    return(
        <div className="contenedorContacto">
            <h1 className="tituloPage">Contacto</h1>
            <form className="formularioContacto">
                <label htmlFor="nombre">Nombre y Apellido</label>
                <input id="nombre" type="text" nombre="nombre"/>
                <label htmlFor="telefono">Telefono</label>
                <input id="telefono" type="number" telefono="telefono"/>
                <label htmlFor="correo">Correo electrónico</label>
                <input id="correo" type="text" correo="correo"/>
                <textarea consulta="consulta" placeholder="Escriba su consulta..." maxLength={350}></textarea>
                <input className="btnEnviar"  type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default ContactPage;