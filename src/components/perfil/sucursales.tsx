import { IonCol, IonContent, IonHeader, IonIcon, IonPage, IonGrid, IonRow, IonToolbar } from "@ionic/react";
import React from "react";
import './sucursales.css';
import TopBarBlue from '../top-bar/topbarblue';
import { NavLink } from "react-router-dom";
import sucursales_img from '../../img/sucursales.png';


// icons
import { alertCircleOutline, personOutline, readerOutline, documentTextOutline, bagOutline, locationOutline, notificationsOutline, helpCircleOutline } from 'ionicons/icons';

const Sucursales: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <TopBarBlue />
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <a href="https://www.google.com/maps/place/Letrimex+Renta+De+Ba%C3%B1os+Port%C3%A1tiles/@25.4797376,-100.9865987,17z/data=!3m1!4b1!4m6!3m5!1s0x86886d2b876db82d:0xd16ff84a73d69024!8m2!3d25.4797376!4d-100.9840184!16s%2Fg%2F11b75n134b?entry=ttu" target="_blank"><img className='imgtamaño' src={sucursales_img} alt="usuario" /></a>
                            <h5>Saltillo</h5>
                        </IonCol>
                        <IonCol>
                            <a href="https://www.google.com/maps/place/Letrimex+Renta+De+Ba%C3%B1os+Port%C3%A1tiles/@25.6873439,-100.2636831,15z/data=!4m6!3m5!1s0x8662952ba921b11d:0x4ddfe7f3144603bd!8m2!3d25.6873439!4d-100.2636831!16s%2Fg%2F11mr5bk9bz?entry=tts&shorturl=1https://www.google.com/maps/place/Letrimex+Renta+De+Ba%C3%B1os+Port%C3%A1tiles/@25.6873439,-100.2636831,15z/data=!4m6!3m5!1s0x8662952ba921b11d:0x4ddfe7f3144603bd!8m2!3d25.6873439!4d-100.2636831!16s%2Fg%2F11mr5bk9bz?entry=tts&shorturl=1" target="_blank"><img className='imgtamaño' src={sucursales_img} alt="usuario" /></a>
                            <h5>Monterrey</h5>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
}


export default Sucursales;