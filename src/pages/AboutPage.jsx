import tiendaLocal from "../assets/tiendalocal.jpg"

const AboutPage = () => {
    return(
        <div className="contenedorAboutPage">
            <h1 className="tituloPage">Nosotros</h1>
            <div className="contenedorAboutPage__contenido">
                <p>Tienda online con sucursal en Buenos Aires dedicada a la comercialización de celulares.</p>
                <img src={tiendaLocal} alt="tienda local"/>
            </div>
        </div>
    )
}

export default AboutPage;