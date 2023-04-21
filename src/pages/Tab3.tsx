import { IonContent, IonHeader, IonPage,  IonToolbar } from '@ionic/react';
import './Tab3.css';
import TopBar from '../components/top-bar/topbar';

const Tab3: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <TopBar/>
          </IonToolbar>
        </IonHeader>
        <div>
          <h2 className='title'>Productos</h2>
        </div>
        <div className='areaPago'>
            <button className='Btnpedido'>Realizar cotización</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
