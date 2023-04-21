import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import '../../pages/Tab2';

const Register: React.FC = () => {
    return (
        <IonPage className='login'>
            <IonContent fullscreen>
                <IonHeader >
                    <IonToolbar>

                    </IonToolbar>
                </IonHeader>
                <div className='formulario'>
                    <form>
                        <div>
                            <h1 >Bienvenid@ a</h1>
                            <h1>Letrimex</h1><br />
                            <p>Por favor, antes de registrarte asegurate<br />
                                de haber llenado todos los<br />
                                campos correctamente
                            </p><br />
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
                            <button id='iniciarSesion'>Registrarme</button>
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
