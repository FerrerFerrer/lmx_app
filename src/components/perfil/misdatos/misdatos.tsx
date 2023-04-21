import { IonContent, IonHeader, IonLabel, IonInput, IonPage, IonToolbar } from "@ionic/react";
import React from "react";
import './misdatos.css';

import usuario_img from '../../../img/usuario.png';
const Misdatos: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                    </IonToolbar>
                </IonHeader>
                <div className="misdatosform">
                    <form>
                        <div>
                            <h1 >Mis Datos</h1>
                            <img id="usuario" src={usuario_img} alt="usuario" />
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="usuario"></IonInput>
                            <IonLabel className='label'>Usuario</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="nombre_apellido"></IonInput>
                            <IonLabel className='label'>Nombre y apellido</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="correo"></IonInput>
                            <IonLabel className='label'>Correo electrónico</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="telefono"></IonInput>
                            <IonLabel className='label'>Número de teléfono</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='number' name="telefono_of"></IonInput>
                            <IonLabel className='label'>Tel. de oficina</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="direccion"></IonInput>
                            <IonLabel className='label'>Dirección</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="rfc"></IonInput>
                            <IonLabel className='label'>RFC</IonLabel>
                        </div>
                        <div>
                            <div>
                                <button className='misdatosopciones'>Editar mis datos</button>
                            </div>
                            <div>
                                <button className='misdatosopciones'>Eliminar cuenta</button>
                            </div>
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Misdatos;