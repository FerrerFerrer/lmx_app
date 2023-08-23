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

import { NavLink } from 'react-router-dom';
import TopBar from '../components/top-bar/topbar';
import { guardarAtajos, guardar } from '../components/catalogos/guardar';
import { useEffect, useState } from 'react';

// import img_nota1 from '../img/imagen-nota-1.png';
// import img_nota2 from '../img/imagen-nota-2.png';
// import img_nota3 from '../img/imagen-nota-3.png';


const Tab1: React.FC = () => {

  let img_nota1 = 'https://ventasletrimex.com.mx/letrimex_v2/public/img/productos/inicio/imagen-nota-1.png';
  let img_nota2 = 'https://ventasletrimex.com.mx/letrimex_v2/public/img/productos/inicio/imagen-nota-2.png';
  let img_nota3 = 'https://ventasletrimex.com.mx/letrimex_v2/public/img/productos/inicio/imagen-nota-3.png';

  var link1 = '';
  var link2 = '';
  var link3 = '';

  let getlink = async (numero: any) => {
    let url = `https://ventasletrimex.com.mx/letrimex_v2/public/listarGaleria/inicio`;
    link1 = 'https://letrimex.com.mx/';
    link2 = 'https://letrimex.com.mx/';
    link3 = 'https://letrimex.com.mx/';

    const req = await fetch(url);

    if (req.ok) {
      const data = await req.json();
      // console.log(data['data'][0]['link']);
      link1 = data['data'][0]['link'];
      link2 = data['data'][1]['link'];
      link3 = data['data'][2]['link'];
    }

    switch (numero) {
      case 1:
        return link1;
      case 2:
        return link2;
      case 3:
        return link3;
      default:
        return 'htps://letrimex.com.mx/';
    }
  }

  let [links1, setLinks1] = useState('');
  useEffect(() => {
    const get1 = async () => {
      setLinks1(await getlink(1))
    }
    get1()
  }, [])

  let [links2, setLinks2] = useState('');
  useEffect(() => {
    const get2 = async () => {
      setLinks2(await getlink(2))
    }
    get2()
  }, [])

  let [links3, setLinks3] = useState('');
  useEffect(() => {
    const get3 = async () => {
      setLinks3(await getlink(3))
    }
    get3()
  }, [])

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
          <TopBar />
        </IonHeader>
        <div className='ion-text-center'>
          {/* <p id='texto-suscribete'>VERSION DE PRUEBA */}
          <p id='texto-suscribete'>¡Suscríbete a nuestro Newsletter!</p>
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
            <img src={imagen_desague} alt="" className='img-btn' />
          </NavLink>
        </div>
        <div>
          <IonRow className="ion-justify-content-start">
            <IonCol size='3'>
              <div >
                <img className="vecsup" src={vector_sup} alt="vector_sup" />
              </div>
            </IonCol>
          </IonRow>
          <IonCol className='options' >
            <div className='atajos'>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('servicio', 'Desagüe de fosas')}>
                  <p>Desagüe de fosas</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('servicio', 'Destape y mantenimiento de drenajes')}>
                  <p>Limpieza de tuberías</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('construccion', 'Sanitarios')}>
                  <p>Baños de construcción</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('evento', 'Sanitarios')}>
                  <p>Baños para evento</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('evento', 'Baños mixtos')}>
                  <p>Caseta de baños mixtos</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('construccion', 'Contenedores')}>
                  <p>Contenedores portátiles</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('construccion', 'Casetas')}>
                  <p>Oficinas Móviles</p>
                </NavLink>
              </IonRow>
              <IonRow >
                <NavLink to={'/subcatalogo'} onClick={() => guardarAtajos('construccion', 'Casetas')}>
                  <p>Casetas para eventos</p>
                </NavLink>
              </IonRow>
            </div>
          </IonCol>
          <IonRow className='ion-justify-content-end vector'>
            <IonCol size='3' className='ion-align-self-end'>
              <div >
                <img className="vecinf" src={vector_inf} alt="vector_inf" />
              </div>
            </IonCol>
          </IonRow>
        </div>
        <div className='NS'>
          <div className='ion-text-center'>
            <h2>NEWSLETTER</h2>
            <p style={{ color: "white" }}></p>

            <p className=''>Conoce las últimas tendencias
              <br />y novedades en: </p>
            <a style={{ color: "white" }} href="https://letrimex.com.mx/"><p>letrimex.com.mx</p></a>
          </div>
          <div className='NS-img'>
            <div >
              <a href={links1} target='_blank'><img src={img_nota1} alt="nota-1" /></a>
            </div>
            <div >
              <a href={links2} target='_blank'><img src={img_nota2} alt="nota-2" /></a>
            </div>
            <div >
              <a href={links3} target='_blank'><img src={img_nota3} alt="nota-2" /></a>
            </div>
          </div>
        </div>
      </IonContent>
      <TextCarousel></TextCarousel>
    </IonPage>
  );
};


const getlinks1231 = async () => {
  let url = `https://ventasletrimex.com.mx/letrimex_v2/public/getBanner`;
  const req = await fetch(url);

  if (req.ok) {
    const data = await req.json();
    return data
  }

  return 'nada'
}

export default Tab1;
