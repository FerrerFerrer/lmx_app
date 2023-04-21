import { IonContent, IonHeader, IonInput, IonLabel, IonPage,  IonToolbar } from '@ionic/react';
import './Tab2.css';
import usuario_img from '../img/usuario.png';
import { NavLink } from 'react-router-dom';


const Tab2: React.FC = () => {
  
  return (
    <IonPage className='login'>
      <IonContent fullscreen>
        <IonHeader >
          <IonToolbar>

          </IonToolbar>
        </IonHeader>
        <div className='formulario'>
          <form>
            <div >
              <h1 >Bienvenido</h1>
              <img id="usuario" src={usuario_img} alt="usuario" />
            </div>
            <div className='campos'>
              <IonInput className="input" type='text' name="user"></IonInput>
              <IonLabel className='label'>Usuario</IonLabel>
            </div>
            <div className='campos'>
              <IonInput className="input" type='password' name="password"></IonInput>
              <IonLabel className='label'>Constraseña</IonLabel>
            </div>
            <div>
              <button id='iniciarSesion'>Iniciar sesión</button>
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
};

export default Tab2;
