import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import '../../pages/Tab2';
import { useState } from 'react';
import { ReactiveFormsModule } from '@angular/forms';

const Register: React.FC = () => {

    const [nombre, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [correo, setCorr] = useState('');
    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState('');
    const [dire, setDire] = useState('');
    const [rfc, setRfc] = useState('');

    const handleUserChange = (e: any) => {setUser(e.target.value);}
    const handlePassChange = (e: any) => {setPass(e.target.value);}
    const handleCorrChange = (e: any) => {setCorr(e.target.value);}
    const handleTel1Change = (e: any) => {setTel1(e.target.value);}
    const handleTel2Change = (e: any) => {setTel2(e.target.value);}
    const handleDireChange = (e: any) => {setDire(e.target.value);}
    const handleRfcChange = (e: any) => {setRfc(e.target.value);}


    const enviar = async (e) => {
        e.preventDefault();


        const url = `https://ventasletrimex.com.mx/letrimex_v2/public/registroapp/${nombre}/${pass}/${correo}/${tel1}/${tel2}/${dire}/${rfc}`;

        const req = await fetch(url);

        if (req.ok) {
            var Swal2 = require('sweetalert2');

            Swal2.fire({
                title: 'Registro',
                text: 'Has sido registrado con éxito',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(function () {
                window.location.href = '/tab2';
            });
            return
        }

        console.log(req);

        var Swal = require('sweetalert2');

        Swal.fire({
            title: 'Este correo ya está registrado',
            html: 'Este correo parece ya estar registrado. <br> Puedes intentar con otro ó <br> <a href="./password"> Click aquí para recuperar tu contraseña.<a>',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    const checkRequired = () => {
        return true;
    }

    return (
        <IonPage className='login'>
            <IonContent fullscreen>
                <IonHeader >
                    <IonToolbar>

                    </IonToolbar>
                </IonHeader>
                <div className='formulario'>
                    <form id="fregistro" onSubmit={enviar} >
                        <div>
                            <h1 >Bienvenid@ a</h1>
                            <h1>Letrimex</h1><br />
                            <p>Por favor, antes de registrarte asegurate<br />
                                de haber llenado todos los<br />
                                campos correctamente
                            </p><br />
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="nombre_apellido" onIonChange={handleUserChange} required={checkRequired()}></IonInput>
                            <IonLabel className='label'>Nombre Completo</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='email' name="correo" onIonChange={handleCorrChange}  required={checkRequired()}></IonInput>
                            <IonLabel className='label'>Correo electrónico</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="contraseña" onIonChange={handlePassChange}  required={checkRequired()}></IonInput>
                            <IonLabel className='label'>Contraseña</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='tel' name="telefono" onIonChange={handleTel1Change}  required={checkRequired()} maxlength={10}></IonInput>
                            <IonLabel className='label'>Número de teléfono</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='tel' name="telefono_of" onIonChange={handleTel2Change}  required={checkRequired()} maxlength={10}></IonInput>
                            <IonLabel className='label'>Tel. de oficina</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="direccion" onIonChange={handleDireChange}  required={checkRequired()}></IonInput>
                            <IonLabel className='label'>Dirección</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="rfc" onIonChange={handleRfcChange}  required={checkRequired()}></IonInput>
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
