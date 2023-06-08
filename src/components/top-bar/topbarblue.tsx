import { IonCol, IonIcon, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from 'ionicons/icons';

// img
// import App, { newToolbar } from "../../App";
import logo_superior_blanco from '../../img/logo_superior_blanco.png';
import './topbar.css';
import {    useHistory } from "react-router-dom";

const TopBarBlue: React.FC = () => {
    let history = useHistory();

    // newToolbar();
    return (
        <IonToolbar >
            <IonRow className='ion-align-items-center ion-justify-content-between rowTop'>
                <IonCol size="1">
                    {/* <NavLink to={ruta} onClick={() => { RouterBack() }}> */}
                    <button style={{backgroundColor: '#083c64'}} onClick={history.goBack}>
                        <IonIcon style={{ color: "white" }} size='large' icon={chevronBack} ></IonIcon>
                    </button>
                    {/* </NavLink> */}
                </IonCol>
                <IonCol size="5">
                    <IonTitle className="padding1">
                        <img style={{ objectFit: 'contain', width: '5rem' }} src={logo_superior_blanco} alt="logo"
                            id="logo_superior" />
                    </IonTitle>
                </IonCol>
                <IonCol size="6">
                    <IonSearchbar className='searchbarTopBlue' show-clear-button="never" placeholder="Buscar"></IonSearchbar>
                </IonCol>
            </IonRow>
        </IonToolbar>
    );
};
export default TopBarBlue;
