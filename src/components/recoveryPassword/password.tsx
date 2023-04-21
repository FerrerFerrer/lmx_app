import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonToolbar } from '@ionic/react';
import '../../pages/Tab2';
import usuario_img from '../../img/usuario.png';
import { NavLink } from 'react-router-dom';


const RecoveryPass: React.FC = () => {
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
              <h1 >Recupera tu contraseña</h1>
              <img id="usuario" src={usuario_img} alt="usuario" />
            </div>
            <div className='campos'>
              <IonInput className="input" type='text' name="user"></IonInput>
              <IonLabel className='label'>Usuario</IonLabel>
            </div>
            <div className='campos'>
              <IonInput className="input" type='email' name="email"></IonInput>
              <IonLabel className='label'>Correo electrónico</IonLabel>
            </div>
            <div>
              <button style={{width:'80%'}} className='recuperarBtn'>Recuperar contraseña</button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RecoveryPass;
