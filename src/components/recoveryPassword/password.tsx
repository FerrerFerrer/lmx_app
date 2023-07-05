import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import '../../pages/Tab2';
import usuario_img from '../../img/usuario.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const RecoveryPass: React.FC = () => {

  const [correo, setCorreo] = useState('');
  const handleEmailChange = (e: any) => { setCorreo(e.target.value); }

  const info = () => {
    var Swal = require('sweetalert2');

    Swal.fire({
      title: '¿Por qué no recibí el correo?',
      html: 'Hay varios motivos por los que pudiste haber no recibido el correo con tu contraseña: <br> <br> - No existe una cuenta registrada con ese correo electronico. <br> - Revisa la carpeta de spam o correo no deseado.',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    })
  }

  const checkRequired = () => {
    return true;
  }

  const enviar = async (e) => {
    e.preventDefault();


    const url = `https://ventasletrimex.com.mx/letrimex_v2/public/recuperarapp/${correo}`;
    console.log(url);

    const req = await fetch(url);

    if (req.ok) {
      var Swal2 = require('sweetalert2');

      Swal2.fire({
        title: 'Correo enviado',
        html: 'Revisa tu correo para recuperar tu contraseña.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(function () {
        window.location.href = '/Tab2';
      });


    } else {
      var Swal = require('sweetalert2');

      Swal.fire({
        title: 'Solicitud no disponible',
        text: 'El servicio de recuperacion de contraseña no se encuentra disponible por el momento.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }

  }

  return (
    <IonPage className='login'>
      <IonContent fullscreen>
        <IonHeader >
          <IonToolbar>

          </IonToolbar>
        </IonHeader>
        <div className='formulario'>
          <form onSubmit={enviar}>
            <div>
              <h1 >Recupera tu contraseña</h1>
              <img id="usuario" src={usuario_img} alt="usuario" />
            </div>
            {/* <div className='campos'>
              <IonInput className="input" type='text' name="user"></IonInput>
              <IonLabel className='label'>Usuario</IonLabel>
            </div> */}
            <div className='campos'>
              <IonInput className="input" type='email' name="email" onIonChange={handleEmailChange} required={checkRequired()}></IonInput>
              <IonLabel className='label'>Correo electrónico</IonLabel>
            </div>
            <div>
              <button style={{ width: '80%' }} className='recuperarBtn'>Enviar email</button>
            </div>
          </form>

          <button style={{ width: '80%' }} className='recuperarBtn2' onClick={info}>¿No me llegó el correo?</button>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default RecoveryPass;
