import { IonCol,IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import logo_superior from '../../img/logo_superior.png';
import './topbar.css';
const TopBar: React.FC = () => {

    // newToolbar();
    return (
        <IonToolbar >
            <IonRow className='ion-align-items-center ion-justify-content-between '>
                <IonCol size="6">
                    <IonTitle>
                        <img style={{ objectFit: 'contain', width: '5rem' }} src={logo_superior} alt="logo" id="logo_superior" /> 
                    </IonTitle> 
                </IonCol>
                <IonCol size="6">
                    <IonSearchbar className='searchbarTop' show-clear-button="never" placeholder="Buscar"></IonSearchbar>
                </IonCol>
            </IonRow>
        </IonToolbar>
    );
};

export default TopBar;