import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import '../../pages/Tab2';
import React, { useState } from "react";
import './formualrioCotizar.css';
import TopBarBlue from '../top-bar/topbarblue';
// import Swal from 'sweetalert2/dist/sweetalert2.all.js'

const FormularioCotizar: React.FC = () => {

    let arreglo = [];

    for (const [key, value] of Object.entries(localStorage)) {
        if (!(isNaN(parseInt(key)))) {
            arreglo.push({ id: key, cantidad: value })

        }
    }

    if (arreglo.length === 0) {
        window.location.href = '/Tab3';
    }

    console.log(arreglo);
    // return;

    var categ = 'Evento';
    var equipo = '';

    if (arreglo[0]['id'] <= 11) {
        categ = 'Evento';

    } else if (arreglo[0]['id'] > 11 && arreglo[0]['id'] <= 33) {
        categ = 'Construccion';

    } else {
        categ = 'Servicio';
    }

    ((localStorage.getItem('1') !== '0') && (localStorage.getItem('1') !== null)) ? equipo += "Baño Azul, " : equipo += "";
    ((localStorage.getItem('2') !== '0') && (localStorage.getItem('2') !== null)) ? equipo += "Baño Rosa, " : equipo += "";
    ((localStorage.getItem('3') !== '0') && (localStorage.getItem('3') !== null)) ? equipo += "Baño Azul Lujo, " : equipo += "";
    ((localStorage.getItem('4') !== '0') && (localStorage.getItem('4') !== null)) ? equipo += "Baño Rosa Lujo, " : equipo += "";
    ((localStorage.getItem('5') !== '0') && (localStorage.getItem('5') !== null)) ? equipo += "Baño Capacidades, " : equipo += "";
    ((localStorage.getItem('6') !== '0') && (localStorage.getItem('6') !== null)) ? equipo += "Baño Colores, " : equipo += "";
    ((localStorage.getItem('7') !== '0') && (localStorage.getItem('7') !== null)) ? equipo += "Lavamanos, " : equipo += "";
    ((localStorage.getItem('8') !== '0') && (localStorage.getItem('8') !== null)) ? equipo += "" : equipo += "";
    ((localStorage.getItem('9') !== '0') && (localStorage.getItem('9') !== null)) ? equipo += "Baños Mixtos, " : equipo += "";
    ((localStorage.getItem('10') !== '0') && (localStorage.getItem('10') !== null)) ? equipo += "Black Elite, " : equipo += "";
    ((localStorage.getItem('11') !== '0') && (localStorage.getItem('11') !== null)) ? equipo += "Luxuria, " : equipo += "";

    ((localStorage.getItem('12') !== '0') && (localStorage.getItem('12') !== null)) ? equipo += "" : equipo += "";
    ((localStorage.getItem('13') !== '0') && (localStorage.getItem('13') !== null)) ? equipo += "Caseta Vigilancia, " : equipo += "";
    ((localStorage.getItem('14') !== '0') && (localStorage.getItem('14') !== null)) ? equipo += "Caseta 8x20, " : equipo += "";
    ((localStorage.getItem('15') !== '0') && (localStorage.getItem('15') !== null)) ? equipo += "Caseta 8x24, " : equipo += "";
    ((localStorage.getItem('16') !== '0') && (localStorage.getItem('16') !== null)) ? equipo += "Caseta 8x32, " : equipo += "";
    ((localStorage.getItem('17') !== '0') && (localStorage.getItem('17') !== null)) ? equipo += "Caseta 8x44, " : equipo += "";
    ((localStorage.getItem('18') !== '0') && (localStorage.getItem('18') !== null)) ? equipo += "Caseta 10x48, " : equipo += "";
    ((localStorage.getItem('19') !== '0') && (localStorage.getItem('19') !== null)) ? equipo += "Caseta 12x60, " : equipo += "";
    ((localStorage.getItem('20') !== '0') && (localStorage.getItem('20') !== null)) ? equipo += "Fosa Portátil, " : equipo += "";
    ((localStorage.getItem('21') !== '0') && (localStorage.getItem('21') !== null)) ? equipo += "Contenedor 8x20, " : equipo += "";
    ((localStorage.getItem('22') !== '0') && (localStorage.getItem('22') !== null)) ? equipo += "Baño Azul, " : equipo += "";
    ((localStorage.getItem('23') !== '0') && (localStorage.getItem('23') !== null)) ? equipo += "Baño Rosa,, " : equipo += "";
    ((localStorage.getItem('24') !== '0') && (localStorage.getItem('24') !== null)) ? equipo += "Baño Azul Lujo, " : equipo += "";
    ((localStorage.getItem('25') !== '0') && (localStorage.getItem('25') !== null)) ? equipo += "Baño Rosa Lujo, " : equipo += "";
    ((localStorage.getItem('26') !== '0') && (localStorage.getItem('26') !== null)) ? equipo += "Capacidades Dif, " : equipo += "";
    ((localStorage.getItem('27') !== '0') && (localStorage.getItem('27') !== null)) ? equipo += "Baño Colores, " : equipo += "";
    ((localStorage.getItem('28') !== '0') && (localStorage.getItem('28') !== null)) ? equipo += "Lavamanos, " : equipo += "";
    ((localStorage.getItem('29') !== '0') && (localStorage.getItem('29') !== null)) ? equipo += "" : equipo += "";
    ((localStorage.getItem('30') !== '0') && (localStorage.getItem('30') !== null)) ? equipo += "Baños Mixtos, " : equipo += "";
    ((localStorage.getItem('31') !== '0') && (localStorage.getItem('31') !== null)) ? equipo += "" : equipo += "";
    ((localStorage.getItem('32') !== '0') && (localStorage.getItem('32') !== null)) ? equipo += "" : equipo += "";
    ((localStorage.getItem('33') !== '0') && (localStorage.getItem('33') !== null)) ? equipo += "Port a Cool, " : equipo += "";

    ((localStorage.getItem('34') !== '0') && (localStorage.getItem('34') !== null)) ? equipo += "Desague Fosas, " : equipo += "";
    ((localStorage.getItem('35') !== '0') && (localStorage.getItem('35') !== null)) ? equipo += "Vactor, " : equipo += "";
    ((localStorage.getItem('36') !== '0') && (localStorage.getItem('36') !== null)) ? equipo += "Hidrojet, " : equipo += "";
    ((localStorage.getItem('37') !== '0') && (localStorage.getItem('37') !== null)) ? equipo += "Inspección de Tubería, " : equipo += "";


    const num_usuarios = 0;
    const nota = 'Solicitado desde la App'
    const comentario = 'Solicitado desde la App'
    const [nombre_contacto, setNombre] = useState(localStorage.getItem('nombre'));
    const [correo_contacto, setCorreo] = useState(localStorage.getItem('correo'));
    const [telefono_contacto, setTel] = useState(localStorage.getItem('cel'));
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

                for (let index = 0; index <= 40; index++) {
                    localStorage.removeItem(index.toString());

                }

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

    if (localStorage.getItem('sesion') !== 'true') {
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
                        <TopBarBlue />
                    </IonHeader>
                    <div className='formulario2'>
                        <form onSubmit={enviar2}>
                            <div>
                                <h1 className='textblue'>Solicitud de Cotización</h1>
                                <p className='textblue'>Asegurate de llenar todos los campos correctamente.</p>
                                <p className='textblue'>Un vendedor se pondrá en contacto con usted.</p>

                            </div>

                            <h2 className='textblue'>Datos de contacto</h2>

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

                            <h2 className='textblue'>Datos de la solicitud</h2>

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
