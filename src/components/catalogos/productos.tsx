import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { NavLink } from "react-router-dom";
import TextCarousel from "../textCarousel";
// img
import evento from "../../img/select-evento.png"
import construccion from "../../img/select-construccion.png"
// import App, { newToolbar } from "../../App";
import './producto.css';
import TopBarBlue from "../top-bar/topbarblue";
// function
import {guardar} from "./guardar";


const Productos: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <TopBarBlue />
                </IonHeader>
                <div>
                    <NavLink to={{ pathname: '/catalogo' }} onClick={()=>guardar('evento', 'area')}>
                        <img src={evento} alt="Evento" className='img-btn' />
                    </NavLink>
                    <NavLink to={{ pathname: '/catalogo' }} onClick={()=>guardar('construccion', 'area')}>
                        <img src={construccion} alt="Construccion" className='img-btn' />
                    </NavLink>
                </div>
            </IonContent>
            <TextCarousel></TextCarousel>
        </IonPage>
    );
};

export default Productos;