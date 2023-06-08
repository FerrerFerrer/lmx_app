import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import '../../pages/Tab2';
import React, { useState } from "react";
import './formualrioCotizar.css';
import TopBarBlue from '../top-bar/topbarblue';
import { alertSharp } from 'ionicons/icons';
// import Swal from 'sweetalert2/dist/sweetalert2.all.js'

const FormularioCotizar: React.FC = () => {

    let arreglo = [];

    for (const [key, value] of Object.entries(sessionStorage)) {
        if (!(isNaN(parseInt(key)))) {
            arreglo.push({ id: key, cantidad: value })

        }
    }
    console.log(arreglo);
    // return;

    var categ = 'Evento';
    var equipo = arreglo[0]['id'] + ' (Evento)';

    if (arreglo[0]['id'] <= 11) {
        categ = 'Evento';
        equipo = arreglo[0]['id'] + ' (Evento)';
    }else if(arreglo[0]['id'] > 11 && arreglo[0]['id'] <= 20){
        categ = 'Construccion'
        equipo = arreglo[0]['id'] + ' (Construcción)';
    }else{
        categ = 'Servicio'
        equipo = arreglo[0]['id'] + ' (Servicio)';
    }

    const num_usuarios = 0;
    const nota = 'Solicitado desde la App'
    const comentario = 'Solicitado desde la App'
    const [nombre_contacto, setNombre] = useState(sessionStorage.getItem('nombre'));
    const [correo_contacto, setCorreo] = useState(sessionStorage.getItem('correo'));
    const [telefono_contacto, setTel] = useState(sessionStorage.getItem('cel'));
    const [zona, setZona] = useState('');
    const [direccion, setDireccion] = useState('');
    const [fecha_servicio, setFecha] = useState('');
    const handleNombreChange = (e: any) => { setNombre(e.target.value); }
    const handleCorreoChange = (e: any) => { setCorreo(e.target.value); }
    const handleTelChange = (e: any) => { setTel(e.target.value); }
    const handleZonaChange = (e: any) => { setZona(e.target.value); }
    const handleDireccionChange = (e: any) => { setDireccion(e.target.value); }
    const handleFechaChange = (e: any) => { setFecha(e.target.value); }


    const enviar2 = async (e) => {
        e.preventDefault();


        const url = `https://ventasletrimex.com.mx/letrimex_v2/public/merca_guardar2/${categ}/${zona}/${equipo}/${num_usuarios}/${fecha_servicio}/${telefono_contacto}/${nombre_contacto}/${correo_contacto}/${direccion}/${nota}/${comentario}/App`;
        console.log(url);

        const req = await fetch(url);

        if (req.ok) {
            var Swal2 = require('sweetalert2');

            Swal2.fire({
                title: 'Solicitud enviada',
                text: 'Solicitud enviada con éxito, en breves un vendedor de Letrimex se pondrá en contacto.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(function () {
                window.location.href = '/Pedidos';
            });


        } else {
            var Swal = require('sweetalert2');

            Swal.fire({
                title: 'Solicitud no disponible',
                text: 'El servicio de registro no se encuentra disponible por el momento.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }

    }

    const checkRequired = () => {
        return true;
    }

    if (sessionStorage.getItem('sesion') !== 'true') {
        var Swal = require('sweetalert2');

        Swal.fire({
            title: 'Inicia sesión',
            text: 'Para realizar una cotización debe de haber una sesión iniciada.',
            icon: 'warning',
            confirmButtonText: 'Aceptar',

        }).then(function () {
            window.location.href = '/tab2';
        });



    } else {

        return (
            <IonPage className='login'>
                <IonContent fullscreen>
                    <IonHeader >
                        <IonToolbar>
                            <TopBarBlue></TopBarBlue>
                        </IonToolbar>
                    </IonHeader>
                    <div className='formulario2'>
                        <form onSubmit={enviar2}>
                            <div>
                                <h1 >Solicitud de Cotización</h1>
                                <p>Asegurate de llenar todos los campos correctamente.</p>
                                <p>Un vendedor se pondrá en contacto con usted.</p>

                            </div>

                            <h2>Datos de contacto</h2>

                            <div className='campos'>
                                <IonInput className="input" type='text' name="nombre_apellido" value={nombre_contacto} required={checkRequired()} onIonChange={handleNombreChange} disabled></IonInput>
                                <IonLabel className='label'>Nombre y apellido</IonLabel>
                            </div>
                            <div className='campos'>
                                <IonInput className="input" type='text' name="correo" value={correo_contacto} required={checkRequired()} onIonChange={handleCorreoChange}></IonInput>
                                <IonLabel className='label'>Correo electrónico</IonLabel>
                            </div>
                            <div className='campos'>
                                <IonInput className="input" type='number' name="telefono" value={telefono_contacto} required={checkRequired()} onIonChange={handleTelChange}></IonInput>
                                <IonLabel className='label'>Número de teléfono</IonLabel>
                            </div>

                            <h2>Datos de la solicitud</h2>

                            <div className='campos'>
                                <IonSelect className="input" name="zona" onIonChange={handleZonaChange}>
                                    <IonSelectOption value='1' >Saltillo</IonSelectOption>
                                    <IonSelectOption value='2'>Monterrey</IonSelectOption>
                                    {/* <IonSelectOption value='3'>Otro</IonSelectOption> */}

                                </IonSelect>
                                <IonLabel className='label'>Zona</IonLabel>
                            </div>
                            <div className='campos'>
                                <IonInput className="input" type='text' name="direccion" required={checkRequired()} onIonChange={handleDireccionChange}></IonInput>
                                <IonLabel className='label'>Dirección de entrega</IonLabel>
                            </div>
                            <div className='campos'>
                                <IonInput className="input" type='date' name="fecha" required={checkRequired()} onIonChange={handleFechaChange}></IonInput>
                                <IonLabel className='label'>Fecha tentativa de entrega</IonLabel>
                            </div>
                            {/* <div className='campos'>
                                <IonSelect className="input" name="tipo" value={optionsState}>
                                    <IonSelectOption value='evento'>Evento</IonSelectOption>
                                    <IonSelectOption value='construccion'>Construcción</IonSelectOption>
                                    <IonSelectOption value='servicio'>Servicio</IonSelectOption>
                                </IonSelect>
                                <IonLabel className='label'>Tipo de evento</IonLabel>
                            </div> */}
                            {/* <div className='campos'>
                                <IonInput className="input" type='number' name="usuarios"></IonInput>
                                <IonLabel className='label'>Número de usuarios (aprox.)</IonLabel>
                            </div> */}
                            <div>
                                <button id='iniciarSesion' type='submit'>Solicitar</button>
                            </div>
                        </form>
                    </div>
                </IonContent>
            </IonPage>
        );
    };

}

export default FormularioCotizar;
