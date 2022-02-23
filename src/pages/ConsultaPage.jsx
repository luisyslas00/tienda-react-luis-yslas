import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ConsultaPage = () => {
    const { consultaId } = useParams();
    const [consulta, setConsulta] = useState({});
    let navigate = useNavigate()
    
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
                <div className="contenedorConsultaGlobo">
                    <p>{consulta.cliente.nombre}, su consulta fue enviada exitosamente!</p>
                    <p>Lo contactaremos dentro de las próximas 48hs.</p>
                    <p>Gracias!</p>
                </div>
                <button onClick={()=>navigate(`/`)} className="btnVolver">Volver a la Home</button>
            </div>
        );
}

export default ConsultaPage;