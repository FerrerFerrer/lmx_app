import { IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonToolbar } from "@ionic/react";
import React from "react";
import './perfil.css';
import { NavLink } from "react-router-dom";

// icons
import { alertCircleOutline, personOutline, readerOutline, documentTextOutline, bagOutline, locationOutline, notificationsOutline, helpCircleOutline } from 'ionicons/icons';

const Perfil: React.FC = () => {
    let nombre = "Francisco Ferrer";
    return (
        <IonPage className="perfil">
            <IonContent fullscreen>
                <div className="d-flex justify-content-center bienvenido">
                    <h3>Bienvenid@ {nombre}</h3>
                </div>
                <div className="options ">
                    <IonRow>
                        {Opciones(personOutline, "Mis Datos", "/misdatos", "4")}
                        {Opciones(documentTextOutline, "Edo de Cuenta", "/tab1", "4")}
                        {Opciones(readerOutline, "Facturación", "/tab1", "4")}
                    </IonRow>
                    <IonRow>
                        {Opciones(bagOutline, "Mis pedidos", "/tab1", "4")}
                        {Opciones(locationOutline, "Sucursales", "/tab1", "4")}
                        {Opciones(notificationsOutline, "Notificaciones", "/tab1", "4")}
                    </IonRow>
                    <IonRow>
                        {Opciones(helpCircleOutline, "Ayuda", "/tab1", "12")}
                    </IonRow>
                </div>
                <div className="extras ">
                    <div className="d-flex justify-content-center" >
                        <p className="quejas "> <IonIcon size='large' icon={alertCircleOutline}></IonIcon>Quejas y Sugerencias</p>
                    </div>
                    <div className="d-flex justify-content-center " >
                        <button >Cerrar Sesión</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

const Opciones = (icono: any, texto: string, ruta: string, size: string) => {
    return (
        <IonCol size={size} className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
                <NavLink to={ruta} className="style-opciones">
                    <IonIcon size="large" className="iconos" icon={icono}></IonIcon>
                    <p>{texto}</p>
                </NavLink>
            </div>
        </IonCol>
    );
}
export default Perfil;