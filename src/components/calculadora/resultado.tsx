import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";
import TopBarBlue from "../top-bar/topbarblue";
import { NavLink, useParams } from "react-router-dom";
import './resultado.css';

const Resultado: React.FC = () => {
    const {calculo} = useParams();
    return (
        <div>
            <IonPage>
                <IonHeader >
                    <IonToolbar>
                        <TopBarBlue />
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <div className="body-resultado-calculadora">
                        <div>
                            <h2>PARA LOS DATOS INGRESADOS SE RECOMIENDA UNA CANTIDAD DE:</h2>
                            <p>{calculo}</p>
                            <p>Baños</p>
                        </div>
                        <div>
                            <p>*Por cada 4 baños se recomienda la renta de 1 fuente lavamanos</p>
                            <NavLink to={"/tab1"}>
                                <button>Regresar Inicio</button>
                            </NavLink>
                            <h2>Agradecemos su preferencia, en unos momentos el asesor ejecutico se contactara con usted</h2>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Resultado;