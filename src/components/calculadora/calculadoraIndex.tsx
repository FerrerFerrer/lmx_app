import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react"
import TopBarBlue from "../top-bar/topbarblue";
import './calculadoraEvento.css';
import { NavLink } from "react-router-dom";

const CalculadoraIndex: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader >
                    <TopBarBlue />
                </IonHeader>

                <p className="tituloIndexC">SELECCIONE BAÑOS PARA OBRAS U EVENTOS SEGÚN SU NECESIDAD </p>
                <div className="calculadora-option">
                    <NavLink to={'/calculadoraEvento'}>
                        <img src="https://letrimex.com.mx/wp-content/uploads/2021/11/Boton-Evento.png" alt="" />
                        <p>EVENTOS</p>
                    </NavLink>
                </div>
                <div className="calculadora-option">
                    <NavLink to={'/calculadoraConstruccion'}>
                        <img src="https://letrimex.com.mx/wp-content/uploads/2021/11/Boton-Construccion.png" alt="" />
                        <p>CONSTRUCCIÓN</p>
                    </NavLink>
                </div>
            </IonContent>
        </IonPage >
    )
}

export default CalculadoraIndex;