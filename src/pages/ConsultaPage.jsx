import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ConsultaPage = () => {
    const { consultaId } = useParams();
    const [consulta, setConsulta] = useState({});
    
    useEffect(() => {
        const db = getFirestore();
        db.collection("consultas")
        .doc(consultaId)
        .get()
        .then((res) => setConsulta({ id: res.id, ...res.data() }));
        }, [consultaId]);
            
        if (!consulta.id) {
            return <p>Cargando...</p>;
        }
        return (
            <div className="contenedorConsulta">
                <h1>{consulta.cliente.nombre}, su consulta fue enviada exitosamente!</h1>
                <p>Lo contactaremos dentro de las próximas 48hs</p>
            </div>
        );
}

export default ConsultaPage;