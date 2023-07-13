import { IonCol, IonContent, IonHeader, IonPage, IonGrid, IonRow, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import './pedidos.css';
import TopBarBlue from '../top-bar/topbarblue';
import imgchek from '../../img/check.png';
import imgnocheck from '../../img/nocheck.png';


const Pedidos: React.FC = () => {

    let [pedido, setpedido] = useState([]);
    useEffect(() => {
        const get1 = async () => {
            setpedido(await getdata())

        }
        get1()
    }, [])

    console.log(Object.entries(pedido).length);
    return (
        <IonPage>
            <IonHeader>
                <TopBarBlue />
            </IonHeader>
            <IonContent fullscreen>

                <h1 className="titulo">{Object.entries(pedido).length === 0 ? null : 'Mi pedido'}</h1>
                <h3 className="nohay">{Object.entries(pedido).length === 0 ? 'Aún no hay pedidos.' : null}</h3>


                {
                    pedido.map((id: any) => (
                        <div key={id.id}>
                            <p className="subtitulo">Numero de solicitud <br /> #{id.id}</p>
                            <p className="subtitulo">{id.equipo}</p>
                            <p className="subtitulo">{id.fecha_servicio}</p>


                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <img src={imgchek} alt="check" />
                                        <p className="columns">Solicitud recibida</p>
                                    </IonCol>
                                    <IonCol>
                                        <img src={id.respuesta == 9 || id.respuesta == 2 || id.respuesta == 7 || id.respuesta == 'Si, se realizó la cotización' || id.respuesta == 1 || id.respuesta == 3 ? imgchek : imgnocheck} alt="check" />
                                        <p className="columns">Solicitud en seguimiento</p>
                                    </IonCol>
                                    <IonCol>
                                        {/* <img src={id.status_solicitud >= 5 && id.status_solicitud <= 6 || id.status_solicitud == 9 ? imgchek : imgnocheck} alt="check" /> */}
                                        <img src={id.respuesta == 7 || id.respuesta == 'Si, se realizó la cotización' || id.respuesta == 1 || id.respuesta == 3 ? imgchek : imgnocheck} alt="chek" />
                                        <p className="columns">Cotización realizada</p>
                                    </IonCol>
                                    <IonCol>
                                        <img src={id.respuesta == 7 || id.respuesta == 'Si, se realizó la cotización' || id.respuesta == 1 || id.respuesta == 3 ? imgchek : imgnocheck} alt="chek" />
                                        <p className="columns">Pedido realizado</p>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>

                            <p className="subtitulomalo">{id.respuesta == 4 ? 'SOLICITUD RECHAZADA' : null}</p>
                            <p className="subtitulomalo">{id.respuesta == 8 ? 'SOLICITUD CANCELADA' : null}</p>
                            <p className="subtitulomalo">{id.respuesta == 10 ? 'NO SE CERRÓ LA VENTA' : null}</p>
                            <p className="subtitulomalo">{id.respuesta == 'No contesto el cliente' ? 'No contestó el cliente' : null}</p>
                            <p className="subtitulomalo">{id.respuesta == 'No podemos dar el servico' ? 'No se puede dar el servico' : null}</p>
                            <p className="subtitulomalo">{id.respuesta == 'Datos de contacto incorrectos' ? 'Datos incorrectos, vuelva a intentar' : null}</p>

                            


                        </div>
                        // <p>Categoría: {id.categ ? null : 'Sin respuesta'}</p>


                    ))
                }


            </IonContent>
        </IonPage>
    );
}

const getdata = async () => {
    let name = sessionStorage.getItem('nombre');
    const url = `https://ventasletrimex.com.mx/letrimex_v2/public/obtenerSolicitud/${name}`;
    console.log(url);

    const req = await fetch(url);
    let pedidos = [];
    // pedidos = [];

    if (req.ok) {
        pedidos = await req.json();

        console.log(pedidos);

        return (pedidos)
    }
    // pedidos = [{ id: '1', respuesta: 'No hay pedidos disponibles' }]
    return (pedidos)
}

export default Pedidos;