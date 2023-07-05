import { IonCol, IonContent, IonIcon, IonItem, IonList, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from 'ionicons/icons';

// img
// import App, { newToolbar } from "../../App";
import logo_superior_blanco from '../../img/logo_superior_blanco.png';
import './topbar.css';
import { useHistory } from "react-router-dom";
import { useState } from "react";

const TopBarBlue: React.FC = () => {
    let history = useHistory();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const items = [
        { id: 1, name: 'Baños para Evento' },
        { id: 2, name: 'Baños para Construcción' },
        { id: 3, name: 'Fuente Lavamanos para Evento' },
        { id: 4, name: 'Fuente Lavamanos para Construcción' },
        { id: 5, name: 'Baños Mixtos para Evento' },
        { id: 6, name: 'Baños Luxuria' },
        { id: 7, name: 'Baños Black Elite' },

        { id: 8, name: 'Baños Mixtos para Construcción' },
        { id: 9, name: 'Casetas para Construcción' },
        { id: 10, name: 'Contenedores' },
        { id: 11, name: 'Port A Cool (Portacool)' },
        { id: 12, name: 'Fosa Portátil (Fosas)' },
        { id: 13, name: 'Caseta de Vigilancia' },

        { id: 14, name: 'Servicio de Desagüe de fosas sépticas' },
        { id: 15, name: 'Servicio de Destape y mantenimiento con Vactor' },
        { id: 16, name: 'Servicio de Destape y mantenimiento con Hidrojet' },
        { id: 17, name: 'Servicio de Inspección de tubería con cámara' },
        { id: 18, name: 'Destape de Drenajes' },
        { id: 19, name: 'Servicios de Drenaje' },
        { id: 20, name: 'Servicios a Fosas Sépticas' },


        // ... Agrega más elementos aquí
    ];

    const searchItems = (event: CustomEvent) => {
        const term = event.detail.value;
        setSearchTerm(term);

        const filtered = items.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const navigateToSubcatalogo = (item: any) => {
        // Actualiza las variables del localStorage
        //se mandan en el local storage porque la pantalla subcatalogo genera de acuerdo al valor de esas variables

        switch (item.id) {
            case 1:
                localStorage.setItem('area', 'evento');
                localStorage.setItem('categoria', 'Sanitarios');
                break;
            case 2:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Sanitarios');
                break;
            case 3:
                localStorage.setItem('area', 'evento');
                localStorage.setItem('categoria', 'Fuentes');
                break;
            case 4:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Fuentes');
                break;
            case 5:
                localStorage.setItem('area', 'evento');
                localStorage.setItem('categoria', 'Sanitarios');
                break;
            case 6:
                localStorage.setItem('area', 'evento');
                localStorage.setItem('categoria', 'Luxuria');
                break;
            case 7:
                localStorage.setItem('area', 'evento');
                localStorage.setItem('categoria', 'Black Elite');
                break;
            case 8:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Sanitarios');
                break;
            case 9:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Casetas');
                break;
            case 10:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Contenedores');
                break;
            case 11:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Port a cool');
                break;
            case 12:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Fosas portátiles');
                break;
            case 13:
                localStorage.setItem('area', 'construccion');
                localStorage.setItem('categoria', 'Casetas');
                break;
            case 14:
                localStorage.setItem('area', 'servicio');
                localStorage.setItem('categoria', 'Desagüe de fosas');
                break;
            case 15:
                localStorage.setItem('area', 'servicio');
                localStorage.setItem('categoria', 'Destape y mantenimiento de drenajes');
                break;
            case 16:
                localStorage.setItem('area', 'servicio');
                localStorage.setItem('categoria', 'Destape y mantenimiento de drenajes');
                break;
            case 17:
                localStorage.setItem('area', 'servicio');
                localStorage.setItem('categoria', 'Inspección de tuberías');
                break;
            case 18:
                localStorage.setItem('area', 'servicio');
                localStorage.setItem('categoria', 'Destape y mantenimiento de drenajes');
                break;
            case 19:
                localStorage.setItem('area', 'servicio');
                localStorage.setItem('categoria', 'Destape y mantenimiento de drenajes');
                break;
            case 20:
                localStorage.setItem('area', 'servicio');
                localStorage.setItem('categoria', 'Desagüe de fosas');
                break;
        }

        //const evento servicio
        //Sanitarios, Fuentes, Baños Mixtos, Black elite
        //Luxuria, Port a cool, Casetas, Fosas portátiles, Contenedores
        //Desagüe de fosas, Destape y mantenimiento de drenajes, Inspección de tuberías

        // Redirecciona a la ruta "/subcatalogo"
        window.location.href = '/Subcatalogo';
    };


    const showItems = searchTerm !== '' && filteredItems.length > 0;
    // newToolbar();
    return (
        <IonToolbar >
            <IonRow className='ion-align-items-center ion-justify-content-between rowTop'>
                <IonCol size="1">
                    {/* <NavLink to={ruta} onClick={() => { RouterBack() }}> */}
                    <button style={{ backgroundColor: '#083c64' }} onClick={history.goBack}>
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
                    <IonSearchbar className='searchbarTopBlue' show-clear-button="never" placeholder="Buscar" value={searchTerm} onIonChange={searchItems}></IonSearchbar>
                </IonCol>
            </IonRow>

            {showItems ? (
                <IonList>
                    {filteredItems.map((item) => (
                        <IonItem className="buscador" key={item.id} onClick={() => navigateToSubcatalogo(item)}>
                            {item.name}
                        </IonItem>
                    ))}
                </IonList>
            ) : (
                <p></p>
            )}

        </IonToolbar >


    );
};
export default TopBarBlue;
