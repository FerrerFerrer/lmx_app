import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import './Tab2.css';

import usuario_img from '../img/usuario.png';
import usuario2_img from '../img/usuario2.png';
import edo_img from '../img/edo.png';
import fact_img from '../img/fact.png';
import pedidos_img from '../img/pedidos.png';
import sucursales_img from '../img/sucursales.png';
import notif_img from '../img/notif.png';
import ayuda_img from '../img/ayuda.png';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import TopBarBlue from '../components/top-bar/topbarblue';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

const Tab2: React.FC = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleUserChange = (e: any) => {
    setUser(e.target.value);
  }

  const handlePassChange = (e: any) => {
    setPass(e.target.value);
  }

  const validar = async (e) => {
    e.preventDefault();
    let url = `https://ventasletrimex.com.mx/letrimex_v2/public/acceso/${user}/${pass}`;
    const req = await fetch(url);

    if (req.ok) {
      const data = await req.json();
      console.log(data);

      //variables de sesion
      sessionStorage.setItem('sesion', 'true');
      sessionStorage.setItem('nombre', data['nombre']);
      sessionStorage.setItem('correo', data['correo']);
      sessionStorage.setItem('cel', data['cel']);
      sessionStorage.setItem('rfc', data['rfc']);
      sessionStorage.setItem('direccion', data['direccion']);

      // console.log(sessionStorage.getItem('direccion'));

      // window.location.href = 'tab1';
      window.location.reload();


      return
    }

    var Swal = require('sweetalert2');

    Swal.fire({
      title: 'Credenciales incorrectas',
      text: 'Revisa los datos ingresados.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
    sessionStorage.setItem('sesion', 'false');

  }

  const cerrar = () => {
    sessionStorage.setItem('sesion', 'false');
    sessionStorage.setItem('nombre', null);
    sessionStorage.setItem('correo', null);
    sessionStorage.setItem('cel', null);
    sessionStorage.setItem('rfc', null);
    sessionStorage.setItem('direccion', null);
    window.location.reload();

  }

  const nodisponible = () => {
    var Swal2 = require('sweetalert2');

    Swal2.fire({
      title: 'No disponbile',
      text: 'Este contenido no está disponible',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }

  if (sessionStorage.getItem('sesion') != 'true') {
    return (
      <IonPage className='login'>
        <IonContent fullscreen>
          <div className='formulario'>
            <form onSubmit={validar}>
              <div >
                <h1 >Bienvenido</h1>
                <img id="usuario" src={usuario_img} alt="usuario" />
              </div>
              <div className='campos'>
                <IonInput className="input" type='text' name="user" onIonChange={handleUserChange} value={user}></IonInput>
                <IonLabel className='label'>Email</IonLabel>
              </div>
              <div className='campos'>
                <IonInput className="input" type='password' name="password" onIonChange={handlePassChange} value={pass}></IonInput>
                <IonLabel className='label'>Constraseña</IonLabel>
              </div>
              <div>
                <button id='iniciarSesion' type='submit'>Iniciar sesión</button>
              </div>
            </form>
            <div className='options'>
              <NavLink to={'/register'}>
                Crear perfil
              </NavLink>
            </div>
            <div className='options'>
              <NavLink to={'/password'}>
                Olvide mi contraseña
              </NavLink>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );

  } else {

    return (
      <IonPage>
        <IonHeader >
          <IonToolbar>
            <TopBarBlue />
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

          <div className='welcome'>
            <h1 className='welcome'>Bienvenid@ {sessionStorage.getItem('nombre')}</h1>
          </div>

          <IonGrid>
            <IonRow>
              <IonCol>
                <NavLink to={'/misdatos'}>
                  <img className='imgtamaño' src={usuario2_img} alt="usuario" />
                  <h5>Mis Datos</h5>
                </NavLink>

              </IonCol>
              <IonCol>
                <NavLink to={'/tab2'} onClick={nodisponible}>
                  <img className='imgtamaño' src={edo_img} alt="usuario" />
                  <h5>Edo de Cuenta</h5>
                </NavLink>
              </IonCol>
              <IonCol>
                <NavLink to={'/tab2'} onClick={nodisponible}>
                  <img className='imgtamaño' src={fact_img} alt="usuario" />
                  <h5>Facturación</h5>
                </NavLink>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonGrid>
            <IonRow>
              <IonCol>
                <NavLink to={'/Pedidos'}>
                  <img className='imgtamaño' src={pedidos_img} alt="usuario" />
                  <h5>Mis Pedidos</h5>
                </NavLink>
              </IonCol>
              <IonCol>
                <NavLink to={'/Sucursales'}>
                  <img className='imgtamaño' src={sucursales_img} alt="usuario" />
                  <h5>Sucursales</h5>
                </NavLink>
              </IonCol>
              <IonCol>
                <NavLink to={'/tab2'} onClick={nodisponible}>
                  <img className='imgtamaño' src={notif_img} alt="usuario" />
                  <h5>Notificaciones</h5>
                </NavLink>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonGrid>
            <IonRow>
              <IonCol>
              </IonCol>
              <IonCol>
                <NavLink to={{ pathname: 'https://api.whatsapp.com/send?phone=528448815393' }} target="_blank">
                  <img className='imgtamaño' src={ayuda_img} alt="usuario" />
                  <h5>Ayuda</h5>
                </NavLink>
              </IonCol>
              <IonCol>
              </IonCol>
            </IonRow>
          </IonGrid>

          <div className='cerrar2'>
            <NavLink to={{ pathname: 'https://api.whatsapp.com/send?phone=528448815393' }} target="_blank">
              <button className='botonquejas'>Quejas y Sugerencias</button>
            </NavLink>
          </div>

          <div className='cerrar'>
            <NavLink to={'/tab1'}>
              <button className='cerrar' onClick={() => cerrar()}>Cerrar sesión</button>
            </NavLink>
          </div>

        </IonContent>
      </IonPage>
    );

  }

};

export default Tab2;
