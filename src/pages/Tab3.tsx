import { IonContent, IonGrid, IonHeader, IonCol, IonModal, IonPage, IonRow, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { attach, trash } from 'ionicons/icons';
import TopBar from '../components/top-bar/topbar';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

var contadorEvento = 0;
var contadorConstruccion = 0;
var contadorServicios = 0;
var contador = 0;

const evento = () => {
  for (let x = 0; x <= 12; x++) {
    if ((sessionStorage.getItem(x.toString()) !== '0') && (sessionStorage.getItem(x.toString()) !== null)) {
      (contadorEvento = contadorEvento + 1)
    }
  }
  return contadorEvento
}

const constr = () => {
  for (let x = 12; x <= 33; x++) {
    if ((sessionStorage.getItem(x.toString()) !== '0') && (sessionStorage.getItem(x.toString()) !== null)) {
      (contadorConstruccion = contadorConstruccion + 1)
    }
  }
  return contadorConstruccion
}

const serv = () => {
  for (let x = 34; x <= 37; x++) {
    if ((sessionStorage.getItem(x.toString()) !== '0') && (sessionStorage.getItem(x.toString()) !== null)) {
      (contadorServicios = contadorServicios + 1)
    }
  }
  return contadorServicios
}

const cont = () => {
  if (contadorEvento > 0 || contadorConstruccion > 0 || contadorServicios > 0) {
    contador = 1;
  } else {
    contador = 0;
  }
  return contador
}


const Tab3: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <TopBar />
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>

        <Modal showModal={showModal} setShowModal={setShowModal} />

        <div>
          <h2 className='title'>Productos</h2>
        </div>

        <h3 className='title'>
          {(evento() > 0) ? 'Evento' : null}
        </h3>

        {((sessionStorage.getItem('1') !== '0') && (sessionStorage.getItem('1') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('1')) + " Baño Azul Convencional"} <br /> <span className='adentro'>Baños para evento...</span> <button className='borrar' onClick={() => borrar('1')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('2') !== '0') && (sessionStorage.getItem('2') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('2')) + " Baño Rosa Convencional"} <br /> <span className='adentro'>Baños para evento...</span> <button className='borrar' onClick={() => borrar('2')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('3') !== '0') && (sessionStorage.getItem('3') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('3')) + " Baño Azul Lujo"} <br /> <span className='adentro'>Baños para evento...</span> <button className='borrar' onClick={() => borrar('3')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('4') !== '0') && (sessionStorage.getItem('4') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('4')) + " Baño Rosa Lujo"} <br /> <span className='adentro'>Baños para evento...</span> <button className='borrar' onClick={() => borrar('4')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('5') !== '0') && (sessionStorage.getItem('5') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('5')) + " Capacidades Dif."} <br /> <span className='adentro'>Baños para evento...</span> <button className='borrar' onClick={() => borrar('5')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('6') !== '0') && (sessionStorage.getItem('6') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('6')) + " Convencional Colores"} <br /> <span className='adentro'>Baños para evento...</span> <button className='borrar' onClick={() => borrar('6')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('7') !== '0') && (sessionStorage.getItem('7') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('7')) + " Fuente Lavamanos"} <br /> <span className='adentro'>Fuente lavamanos para evento...</span> <button className='borrar' onClick={() => borrar('7')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('8') !== '0') && (sessionStorage.getItem('8') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('8')) + " aa"} <br /> <span className='adentro'>Descripción...</span> <button className='borrar' onClick={() => borrar('8')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('9') !== '0') && (sessionStorage.getItem('9') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('9')) + " Baños Mixtos"} <br /> <span className='adentro'>Baños apra evento...</span> <button className='borrar' onClick={() => borrar('9')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('10') !== '0') && (sessionStorage.getItem('10') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('10')) + " Black Elite"} <br /> <span className='adentro'>Baños apra evento...</span> <button className='borrar' onClick={() => borrar('10')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('11') !== '0') && (sessionStorage.getItem('11') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('11')) + " Luxuria"} <br /> <span className='adentro'>Baños apra evento...</span> <button className='borrar' onClick={() => borrar('11')}><img src={trash} alt="" /></button></h4> : null)}

        <h3 className='title'>
          {(constr() > 0) ? 'Construcción' : null}
        </h3>

        {((sessionStorage.getItem('12') !== '0') && (sessionStorage.getItem('12') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('12')) + " aaa"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('12')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('13') !== '0') && (sessionStorage.getItem('13') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('13')) + " Caseta Mobile Vigilancia"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('13')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('14') !== '0') && (sessionStorage.getItem('14') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('14')) + " Caseta Mobile 8x20"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('14')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('15') !== '0') && (sessionStorage.getItem('15') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('15')) + " Caseta Mobile 8x24"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('15')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('16') !== '0') && (sessionStorage.getItem('16') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('16')) + " Caseta Mobile 8x32"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('16')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('17') !== '0') && (sessionStorage.getItem('17') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('17')) + " Caseta Mobile 8x44"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('17')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('18') !== '0') && (sessionStorage.getItem('18') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('18')) + " Caseta Mobile 10x48"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('18')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('19') !== '0') && (sessionStorage.getItem('19') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('19')) + " Caseta Mobile 12x60"} <br /> <span className='adentro'>Casetas para construcción...</span> <button className='borrar' onClick={() => borrar('19')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('20') !== '0') && (sessionStorage.getItem('20') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('20')) + " Fosa Portatil"} <br /> <span className='adentro'>Fosa portátil...</span> <button className='borrar' onClick={() => borrar('20')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('21') !== '0') && (sessionStorage.getItem('21') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('21')) + " Contenedor Portatil 8x20"} <br /> <span className='adentro'>Contenedor Portátil...</span> <button className='borrar' onClick={() => borrar('21')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('22') !== '0') && (sessionStorage.getItem('22') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('22')) + " Baño Azul Convecnional"} <br /> <span className='adentro'>Baños para construcción...</span> <button className='borrar' onClick={() => borrar('22')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('23') !== '0') && (sessionStorage.getItem('23') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('23')) + " Baño Rosa Convencional"} <br /> <span className='adentro'>Baños para construcción...</span> <button className='borrar' onClick={() => borrar('23')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('24') !== '0') && (sessionStorage.getItem('24') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('24')) + " Baño Azul Lujo"} <br /> <span className='adentro'>Baños para construcción...</span> <button className='borrar' onClick={() => borrar('24')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('25') !== '0') && (sessionStorage.getItem('25') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('25')) + " Baño Rosa Lujo"} <br /> <span className='adentro'>Baños para construcción...</span> <button className='borrar' onClick={() => borrar('25')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('26') !== '0') && (sessionStorage.getItem('26') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('26')) + " Capacidades D."} <br /> <span className='adentro'>Baños para construcción...</span> <button className='borrar' onClick={() => borrar('26')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('27') !== '0') && (sessionStorage.getItem('27') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('27')) + " Convencional Colores"} <br /> <span className='adentro'>Baños para construcción...</span> <button className='borrar' onClick={() => borrar('27')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('28') !== '0') && (sessionStorage.getItem('28') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('28')) + " Fuente Lavamanos"} <br /> <span className='adentro'>Fuente lavamanos para construcción...</span> <button className='borrar' onClick={() => borrar('28')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('29') !== '0') && (sessionStorage.getItem('29') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('29')) + " aaa"} <br /> <span className='adentro'>Descripción...</span> <button className='borrar' onClick={() => borrar('29')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('30') !== '0') && (sessionStorage.getItem('30') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('30')) + " Baños Mixtos"} <br /> <span className='adentro'>Baños para construcción...</span> <button className='borrar' onClick={() => borrar('30')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('31') !== '0') && (sessionStorage.getItem('31') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('31')) + " aaa"} <br /> <span className='adentro'>Descripción...</span> <button className='borrar' onClick={() => borrar('31')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('32') !== '0') && (sessionStorage.getItem('32') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('32')) + " aaa"} <br /> <span className='adentro'>Descripción...</span> <button className='borrar' onClick={() => borrar('32')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('33') !== '0') && (sessionStorage.getItem('33') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('33')) + " Port a Cool"} <br /> <span className='adentro'>Port a Cool...</span> <button className='borrar' onClick={() => borrar('33')}><img src={trash} alt="" /></button></h4> : null)}

        <h3 className='title'>
          {(serv() > 0) ? 'Servicios' : null}
        </h3>

        {((sessionStorage.getItem('34') !== '0') && (sessionStorage.getItem('34') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('34')) + " Desague Fosa Séptica"} <br /> <span className='adentro'>Servicios Letrimex...</span> <button className='borrar' onClick={() => borrar('34')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('35') !== '0') && (sessionStorage.getItem('35') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('35')) + " Destape y Mantenimiento con Vactor"} <br /> <span className='adentro'>Servicios Letrimex...</span> <button className='borrar' onClick={() => borrar('35')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('36') !== '0') && (sessionStorage.getItem('36') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('36')) + " Destape y Mantenimiento con Hidrojet"} <br /> <span className='adentro'>Servicios Letrimex...</span> <button className='borrar' onClick={() => borrar('36')}><img src={trash} alt="" /></button></h4> : null)}
        {((sessionStorage.getItem('37') !== '0') && (sessionStorage.getItem('37') !== null) ? <h4 className='lista'> {"x" + (sessionStorage.getItem('37')) + " Insprección de Tubería con Cámara"} <br /> <span className='adentro'>Servicios Letrimex...</span> <button className='borrar' onClick={() => borrar('37')}><img src={trash} alt="" /></button></h4> : null)}


        {(cont() == 0) ? <h3 className='title2'>Carrito vacío, añade productos al carrito...</h3> : null}


        <div className='areaPago'>
          {(cont() !== 0) ?

            <button className='Btnpedido ' onClick={openModal}>Realizar cotización</button>

            : null}
          <button className='Btnreload' onClick={() => window.location.reload()}>Recargar carrito</button>
        </div>

      </IonContent>
    </IonPage>
  );
};

const borrar = (id) => {
  sessionStorage.removeItem(id);
  window.location.reload();
}


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:99;
`;

const ModalWrapper = styled.div`
  width: 95%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  margin:10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding:10px;
  z-index:100;
  max-height: 60vh;
  overflow-y:auto;


  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: white;
    color: #083c64;
    border: none;
    margin 0px;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>


                <h4 className='mtitulo'>POLITICAS DE COMPRA Y RENTA</h4>

                <h4 className='mtitulo2'>POLITICAS SANITARIOS</h4>
                <h5 className='mtexto'>- Los servicios de limpieza de los sanitarios portátiles
                  se realizarán de manera terciaria (lunes, miércoles y viernes) o (martes, jueves y sábado)
                  de lunes a viernes de 8:00 a 18:00hrs y sábados de 8:00 a 13:00hrs excepto domingos, días festivos y/o
                  cuando las condiciones del clima pongan en riesgo la operación.</h5>
                <h5 className='mtexto'>- Cada servicio de limpieza incluye un rollo de papel higiénico por equipo.</h5>
                <h5 className='mtexto'>- Si es requerida la limpieza diaria tendrá un costo adicional.</h5>
                <h5 className='mtexto'>- Se deberá mantener el libre acceso al equipo para realizar los
                  servicios de limpieza y/o mantenimientos.</h5>
                <h5 className='mtexto'>- No arrojar objetos extraños (piedras, bolsas de cemento, ropa) o 
                residuos peligrosos al depósito de captación.</h5>
                <h5 className='mtexto'>- No sobrepesar la cantidad máxima de la utilización del sanitario (15 personas por sanitario).</h5>
                <h5 className='mtexto'>- No puede usar los equipos como almacén ni guardar cosas u 
                objetos dentro de esta ya que no nos hacemos responsables por perdidas parciales
                o totales</h5>


                <h4 className='mtitulo2'>POLITICAS CASETAS MÓVILES / CONTENEDORES</h4>

                <h5 className='mtexto'>- Fotografías del área despejada.</h5>
                <h5 className='mtexto'>- Depósito en garantía (Casetas)</h5>
                <h5 className='mtexto'>- EL CLIENTE deberá tener listo el terreno donde se entregará
                el equipo, este debe estar nivelado y compactado al momento de recibirla.</h5>
                <h5 className='mtexto'>- El acceso al sitio debe ser apropiado.</h5>
                <h5 className='mtexto'>- En caso de requerir maniobras adicionales por causas de 
                sitio inapropiado se cobrará como cargos extras.</h5>
                <h5 className='mtexto'>- Los daños ocasionados a climas, componentes y/o estructura
                de la caseta durante su arrendamiento corren por cuenta del cliente y se valorizarán 
                al recibir la unidad devuelta por terminación de contrato en el domicilio del Arrendador. (Casetas)</h5>
                <h5 className='mtexto'>- Se deberá mantener el libre acceso al equipo para realizar los serviciosde limpieza
                y/o mantenimientos.</h5>


                <h4 className='mtitulo2'>GENERAL</h4>
                <h5 className='mtexto'>- El incumplimiento en el pago y la falta de órdenes de compra u 
                otro documento importante, es causa de la recolección de los equipos sin ???? (no mandaron el texto completo)</h5>


                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <NavLink to={'/formularioCotizar'}>
                        <button onClick={() => setShowModal(prev => !prev)}>ACEPTAR</button>
                      </NavLink>
                    </IonCol>
                    <IonCol>
                      <button onClick={() => setShowModal(prev => !prev)}>RECHAZAR</button>
                    </IonCol>
                  </IonRow>
                </IonGrid>

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};



export default Tab3;
