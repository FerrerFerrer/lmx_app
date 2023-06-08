import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import './Tab4.css';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { NavLink } from 'react-router-dom';

const Tab4: React.FC = () => {

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <div className='contenedor'>
            <h1 style={{ textAlign: 'center', margin: '0 0 10% 0' }} >Más</h1>
            <div>
              <NavLink to={{ pathname: 'https://api.whatsapp.com/send?phone=528446779476' }} target='_blank'>
                <IonRow>
                  <IonCol size='11'>
                    <p className='links' >Atención a clientes</p>
                  </IonCol>
                  <IonCol size='1'>
                    <IonIcon size='large' className='links' icon={arrowForward}></IonIcon>
                  </IonCol>
                </IonRow>
              </NavLink>
              <NavLink to={{ pathname: 'https://linktr.ee/letrimex' }} target='_blank'>
                <IonRow>
                  <IonCol size='11'>
                    <p className='links' >Síguenos en nuestras redes sociales</p>
                  </IonCol>
                  <IonCol size='1'>
                    <IonIcon size='large' className='links' icon={arrowForward}></IonIcon>
                  </IonCol>
                </IonRow>
              </NavLink>
              <NavLink to={{ pathname: 'https://letrimex.com.mx' }} target='_blank'>
                <IonRow>
                  <IonCol size='11'>
                    <p className='links' >Visita nuestro sitio web</p>
                  </IonCol>
                  <IonCol size='1'>
                    <IonIcon size='large' className='links' icon={arrowForward}></IonIcon>
                  </IonCol>
                </IonRow>
              </NavLink>
              <NavLink to={{ pathname: 'https://letrimex.com.mx' }} target='_blank'>
                <IonRow>
                  <IonCol size='11'>
                    <p className='links' >Nuestras sucursales</p>
                  </IonCol>
                  <IonCol size='1'>
                    <IonIcon size='large' className='links' icon={arrowForward}></IonIcon>
                  </IonCol>
                </IonRow>
              </NavLink>
              <NavLink to={{ pathname: 'https://api.whatsapp.com/send?phone=528448815393' }} target='_blank'>
                <IonRow>
                  <IonCol size='11'>
                    <p className='links' >Soporte técnico</p>
                  </IonCol>
                  <IonCol size='1'>
                    <IonIcon size='large' className='links' icon={arrowForward}></IonIcon>
                  </IonCol>
                </IonRow>
              </NavLink>
            </div>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Tab4;
