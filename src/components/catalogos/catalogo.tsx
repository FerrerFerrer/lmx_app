import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import './catalogo.css';
import { evento, servicio, titulo, construccion } from '../../reducers/categ';
import TopBarBlue from '../top-bar/topbarblue';
import React from 'react';
import { guardar } from './guardar';

const Catalogo: React.FC = () => {
    let area = localStorage.getItem('area');
    let data: {}[];
    let head: any;
    let containerImg: string = "container-img";
    // console.log(typeof data);

    if (area === 'construccion') {
        data = construccion;
        head = titulo[1];
    }

    else if (area === 'evento') {
        data = evento;
        head = titulo[0];
    }

    else {
        // servicios
        data = servicio;
        head = titulo[2];
        containerImg = "productoImgServicio";
    }

    if (head !== undefined) {
        head = head.imagen;
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader >
                    <IonToolbar>
                        <TopBarBlue />
                    </IonToolbar>
                </IonHeader>
                <img className='tituloImg' src={head} alt="" />
                {
                    <div className={containerImg}>
                        {

                            data.map((producto: any) => (
                                <div key={producto.id}>
                                    <NavLink to={{ pathname: '/subcatalogo' }}
                                        onClick={() => guardar(producto.categoria, "categoria")}>
                                        <img src={producto.imagen} alt="imagen" />
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                }
            </IonContent>
        </IonPage>
    );

};

export default Catalogo;
