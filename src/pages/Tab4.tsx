import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow,  IonToolbar } from '@ionic/react';
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
              <IonRow>
                <IonCol size='11'>
                  <NavLink to={''}>
                    <p className='links' >Atencion a clientes</p>
                  </NavLink>
                </IonCol>
                <IonCol size='1'>
                  <IonIcon size='large' icon={arrowForward}></IonIcon>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='11'>
                  <NavLink to={''}>
                    <p className='links' >Siguenos en nuestras redes sociales</p>
                  </NavLink>
                </IonCol>
                <IonCol size='1'>
                  <IonIcon size='large' icon={arrowForward}></IonIcon>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='11'>
                  <NavLink to={''}>
                    <p className='links' >Visita nuestro sitio web</p>
                  </NavLink>
                </IonCol>
                <IonCol size='1'>
                  <IonIcon size='large' icon={arrowForward}></IonIcon>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='11'>
                  <NavLink to={''}>
                    <p className='links' >Nuestras sucursales</p>
                  </NavLink>
                </IonCol>
                <IonCol size='1'>
                  <IonIcon size='large' icon={arrowForward}></IonIcon>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='11'>
                  <NavLink to={''}>
                    <p className='links' >Soporte técnico</p>
                  </NavLink>
                </IonCol>
                <IonCol size='1'>
                  <IonIcon size='large' icon={arrowForward}></IonIcon>
                </IonCol>
              </IonRow>
            </div>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Tab4;
