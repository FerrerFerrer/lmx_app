import { IonContent, IonHeader, IonLabel, IonInput, IonPage, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import './misdatos.css';
import TopBarBlue from '../../top-bar/topbarblue';

import usuario_img from '../../../img/usuario.png';
const Misdatos: React.FC = () => {

    const [nombre_contacto, setNombre] = useState(sessionStorage.getItem('nombre'));
    const [correo_contacto, setCorreo] = useState(sessionStorage.getItem('correo'));
    const [telefono_contacto, setTel] = useState(sessionStorage.getItem('cel'));
    const [direccion, setDireccion] = useState(sessionStorage.getItem('direccion'));
    const [rfc, setRFC] = useState(sessionStorage.getItem('rfc'));
    const handleNombreChange = (e: any) => { setNombre(e.target.value); }
    const handleCorreoChange = (e: any) => { setCorreo(e.target.value); }
    const handleTelChange = (e: any) => { setTel(e.target.value); }
    const handleDireccionChange = (e: any) => { setDireccion(e.target.value); }
    const handleRFCChange = (e: any) => { setRFC(e.target.value); }

    const checkRequired = () => {
        return true;
    }

    const eliminar = () => {
        

        var Swal2 = require('sweetalert2');

        Swal2.fire({

            title: 'Aviso',
            html: '¿Estás seguro que quieres eliminar tu cuenta? <br> <br> <p style="color:red">¡Esta opción no se puede deshacer!</p>',
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "red",
            cancelButtonColor: "blue",


        }).then(function (inputValue) {

            if (inputValue.isConfirmed===true) {
                eliminarParasiempre();
              } else {
                return;
              }
        });

        return;
    }

    const eliminarParasiempre = async () => {

        const correo = sessionStorage.getItem('correo');
        const url = `https://ventasletrimex.com.mx/letrimex_v2/public/borrarapp/${correo}`;

        const req = await fetch(url);

        if (req.ok) {
            var Swal2 = require('sweetalert2');

            Swal2.fire({
                title: 'Registro',
                text: 'Cuenta eliminada con éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(function () {
                sessionStorage.setItem('sesion', 'false');
                sessionStorage.setItem('nombre', null);
                sessionStorage.setItem('correo', null);
                sessionStorage.setItem('cel', null);
                sessionStorage.setItem('rfc', null);
                sessionStorage.setItem('direccion', null);
                window.location.href = '/tab2';
            });
            return
        }
            

        var Swal = require('sweetalert2');

        Swal.fire({
            title: 'Error',
            html: 'Ha ocurrido un error.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    const editar = async () => {

        const url = `https://ventasletrimex.com.mx/letrimex_v2/public/editarapp/${nombre_contacto}/${correo_contacto}/${telefono_contacto}/${direccion}/${rfc}`;

        const req = await fetch(url);

        if (req.ok) {
            var Swal2 = require('sweetalert2');

            Swal2.fire({
                title: 'Editar',
                text: 'Sus datos han sido actualizados.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(function () {
                sessionStorage.setItem('correo', correo_contacto);
                sessionStorage.setItem('cel', telefono_contacto);
                sessionStorage.setItem('rfc', rfc);
                sessionStorage.setItem('direccion', direccion);
                window.location.reload();;
            });
            return
        }
            

        var Swal = require('sweetalert2');

        Swal.fire({
            title: 'Error',
            html: 'Ha ocurrido un error.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <TopBarBlue />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="misdatosform">
                    <form>
                        <div>
                            <h1 >Mis Datos</h1>
                            <img id="usuario" src={usuario_img} alt="usuario" />
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="nombre" value={nombre_contacto} required={checkRequired()} onIonChange={handleNombreChange} disabled></IonInput>
                            <IonLabel className='label'>Nombre y Apellido</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="correo" value={correo_contacto} onIonChange={handleCorreoChange}></IonInput>
                            <IonLabel className='label'>Correo electrónico</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='number' name="telefono" value={telefono_contacto} onIonChange={handleTelChange}></IonInput>
                            <IonLabel className='label'>Número de teléfono</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="direccion" value={direccion} onIonChange={handleDireccionChange}></IonInput>
                            <IonLabel className='label'>Dirección</IonLabel>
                        </div>
                        <div className='campos'>
                            <IonInput className="input" type='text' name="rfc" value={rfc} onIonChange={handleRFCChange}></IonInput>
                            <IonLabel className='label'>RFC</IonLabel>
                        </div>
                        <div>
                            <div>
                                <button type="button" className='misdatosopciones' onClick={editar}>Guardar cambios</button>
                            </div>
                            <div>
                                <button type="button" className='misdatosopciones2' onClick={eliminar}>Eliminar cuenta</button>
                            </div>
                        </div>
                    </form>
                </div>

            </IonContent>
        </IonPage>
    )
}

export default Misdatos;