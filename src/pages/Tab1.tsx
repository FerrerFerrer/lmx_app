import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import './Tab1.css';
import TextCarousel from '../components/textCarousel';

// imagenes
import banner_perfil from '../img/banner_perfil.png'
import banner_calculadora from '../img/banner-calculadora.png'
import vector_sup from '../img/vector_2_sup.png';
import vector_inf from '../img/vector_2_inf.png';
import banios_home1 from '../img/baños-homes-1.png';
import imagen_desague from '../img/imagen-desague.png';
import img_nota1 from '../img/imagen-nota-1.png';
import img_nota2 from '../img/imagen-nota-2.png';
import img_nota3 from '../img/imagen-nota-3.png';

import { NavLink } from 'react-router-dom';
import TopBar from '../components/top-bar/topbar';
import { guardarAtajos, guardar } from '../components/catalogos/guardar';


const Tab1: React.FC = () => {
  localStorage.clear();
  console.log("borrado");
  
  let session = false;
  let banner;
  if (session) {
    banner = <NavLink to={'/perfil'} >
      <img src={banner_perfil} alt="banner-perfil" id='banner-perfil' className='banner' />
    </NavLink>;
  }
  else {
    banner = <NavLink to={'/tab2'} >
      <img src={banner_perfil} alt="banner-perfil" id='banner-perfil' className='banner' />
    </NavLink>
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar >
            <TopBar />
          </IonToolbar>
        </IonHeader>
        <div className='ion-text-center'>
          <p id='texto-suscribete'>Suscribete a nuestro newsletter</p>
          {banner}
        </div>
        <div className='block-img '>
          <NavLink to='/productos'>
            <img src={banios_home1} alt="" className='img-btn' />
          </NavLink>
        </div>
        <div>
          <NavLink to={'/calculadoraIndex'} >
            <img src={banner_calculadora} alt="" className='img-btn' />
          </NavLink>
        </div>
        <div>
          <NavLink to={{ pathname: '/catalogo' }} onClick={async () => await guardar('servicio', 'area')}>
            <img src={imagen_desague} alt="" className='img-btn'/>
          </NavLink>
        </div>
        <div>
          <IonRow className="ion-justify-content-start">
            <IonCol size='3'>
              <div >
                <img src={vector_sup} alt="vector_sup"/>
              </div>
            </IonCol>
          </IonRow>
          <IonCol className='options' >
            <div className='atajos'>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('evento', 'Sanitarios')}>
                  <p>Baños para evento</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('evento', 'Luxuria')}>
                  <p>Luxuria</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('evento', 'Black elite')}>
                  <p>Black elite</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('evento', 'Fuentes')}>
                  <p>Fuentes lavamanos</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('servicio', 'Desague de fosas')}>
                  <p>Desague de fosas</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('construccion', 'Port a cool')}>
                  <p>Port a cool</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('construccion', 'Fosas portatiles')}>
                  <p>Fosas portátiles</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('servicio', 'Inspeccion de tuberias')}>
                  <p>Inspeccion de tuberias</p>
                </NavLink>
              </IonRow>
            </div>
          </IonCol>
          <IonRow className='ion-justify-content-end vector'>
            <IonCol size='3' className='ion-align-self-end'>
              <div >
                <img src={vector_inf} alt="vector_inf"/>
              </div>
            </IonCol>
          </IonRow>
        </div>
        <div className='NS'>
          <div className='ion-text-center'>
            <h2>NEWSLETTER</h2>
            <p className=''>Conoce las ultimas tendencias
              <br />y novedades en: </p>
            <a style={{ color: "white" }} href="https://letrimex.com.mx/"><p>letrimex.com.mx</p></a>
          </div>
          <div className='NS-img'>
            <div >
              <img src={img_nota1} alt="nota-1" />
            </div>
            <div >
              <img src={img_nota2} alt="nota-2" />
            </div>
            <div >
              <img src={img_nota3} alt="nota-2" />
            </div>
          </div>
        </div>
      </IonContent>
      <TextCarousel></TextCarousel>
    </IonPage>
  );
};

export default Tab1;
