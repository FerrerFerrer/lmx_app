import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './subcatalogo.css';
import { construccion, evento, servicio } from '../../reducers/data';
import TopBarBlue from '../top-bar/topbarblue';
import { alertCircle } from 'ionicons/icons';

let claseContenedorImg = "";

const SubCatalogo: React.FC = () => {
    let tipo = localStorage.getItem('area');
    let categoria = localStorage.getItem('categoria');
    claseContenedorImg = "cClass";
    // console.log(tipo, categoria);

    let data: any;
    // let clase: any;
    // clase = "container-img";
    // let claseImg: string = "productosImg";

    // ver los datos desde el componente que llamo a este y dependiendo de eso,
    // se seleccionaran las imagenes

    if (tipo === 'construccion') {
        data = construccion;
        // clase = "container-img";
    }
    else if (tipo === 'evento') {
        data = evento;
        // clase = "container-img";
    }
    else if (tipo === 'servicio') {
        data = servicio;
        // clase = "servicio";
        // claseImg = "productosImgServicio"
    }
    let productosSeleccionados = seleccionarImagenes(data, categoria);

    // console.log(productosSeleccionados);
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <TopBarBlue />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>{categoria}</h1>
                {
                    <div className={claseContenedorImg}>
                        {
                            productosSeleccionados.map((producto: any) => (
                                <div className='producto' key={producto.id}>
                                    <img className={producto.tamañoImagen} src={producto.images} alt="imagen del producto" />
                                    <p className='productosName'>{producto.name}</p>
                                    <p className='contador' id={producto.id}>Canitdad x{sessionStorage.getItem(producto.id) ? sessionStorage.getItem(producto.id) : 0}</p>
                                    <button className='op' onClick={() => { sumarCarrito(producto.id) }}>Añadir</button>
                                    <button className='op' onClick={() => { restarCarrito(producto.id) }}>Quitar</button>
                                </div>
                            ))
                        }
                    </div>
                }
                <div className='opciones2'>
                    <button className='op2'>Hacer Pedido</button>
                    <button className='op2'>Seguir comprando</button>
                </div>
            </IonContent>
        </IonPage>
    );
};

const seleccionarImagenes = (data: [], categoria: string) => {
    let productosSeparados = [];
    for (let i = 0; i < data.length; i++) {
        let aux: any = data[i];
        if (aux.categoria === categoria) {
            productosSeparados[i] = data[i]
            if (aux.tamañoImagen === "g") {
                claseContenedorImg = 'gClass';
            }
        }
    }
    return (productosSeparados)
}

//variables de productos e_evento
var e_convencionalAzulTotal = parseInt(sessionStorage.getItem('1')) ? parseInt(sessionStorage.getItem('1')) : 0;
var e_convencionalRosaTotal = parseInt(sessionStorage.getItem('2')) ? parseInt(sessionStorage.getItem('2')) : 0;
var e_lujoAzulTotal = parseInt(sessionStorage.getItem('3')) ? parseInt(sessionStorage.getItem('3')) : 0;
var e_lujoRosaTotal = parseInt(sessionStorage.getItem('4')) ? parseInt(sessionStorage.getItem('4')) : 0;
var e_capacidadesTotal = parseInt(sessionStorage.getItem('5')) ? parseInt(sessionStorage.getItem('5')) : 0;
var e_convencionalColoresTotal = parseInt(sessionStorage.getItem('6')) ? parseInt(sessionStorage.getItem('6')) : 0;
var e_fuenteTotal = parseInt(sessionStorage.getItem('7')) ? parseInt(sessionStorage.getItem('7')) : 0;
var e_aaTotal = parseInt(sessionStorage.getItem('8')) ? parseInt(sessionStorage.getItem('8')) : 0;
var e_mixtosTotal = parseInt(sessionStorage.getItem('9')) ? parseInt(sessionStorage.getItem('9')) : 0;
var e_blackEliteTotal = parseInt(sessionStorage.getItem('10')) ? parseInt(sessionStorage.getItem('10')) : 0;
var e_luxuriaTotal = parseInt(sessionStorage.getItem('11')) ? parseInt(sessionStorage.getItem('11')) : 0;

//variables de preoductos c_construccion
var c_convencionalAzulTotal = parseInt(sessionStorage.getItem('22')) ? parseInt(sessionStorage.getItem('22')) : 0;
var c_convencionalRosaTotal = parseInt(sessionStorage.getItem('23')) ? parseInt(sessionStorage.getItem('23')) : 0;
var c_lujoAzulTotal = parseInt(sessionStorage.getItem('24')) ? parseInt(sessionStorage.getItem('24')) : 0;
var c_lujoRosaTotal = parseInt(sessionStorage.getItem('25')) ? parseInt(sessionStorage.getItem('25')) : 0;
var c_capacidadesTotal = parseInt(sessionStorage.getItem('26')) ? parseInt(sessionStorage.getItem('26')) : 0;
var c_convencionalColoresTotal = parseInt(sessionStorage.getItem('27')) ? parseInt(sessionStorage.getItem('27')) : 0;
var c_fuenteTotal = parseInt(sessionStorage.getItem('28')) ? parseInt(sessionStorage.getItem('28')) : 0;
var c_mixtosTotal = parseInt(sessionStorage.getItem('30')) ? parseInt(sessionStorage.getItem('30')) : 0;
var c_mobileVigilancia = parseInt(sessionStorage.getItem('13')) ? parseInt(sessionStorage.getItem('13')) : 0;
var c_mobile820 = parseInt(sessionStorage.getItem('14')) ? parseInt(sessionStorage.getItem('14')) : 0;
var c_mobile824 = parseInt(sessionStorage.getItem('15')) ? parseInt(sessionStorage.getItem('15')) : 0;
var c_mobile832 = parseInt(sessionStorage.getItem('16')) ? parseInt(sessionStorage.getItem('16')) : 0;
var c_mobile844 = parseInt(sessionStorage.getItem('17')) ? parseInt(sessionStorage.getItem('17')) : 0;
var c_mobile1048 = parseInt(sessionStorage.getItem('18')) ? parseInt(sessionStorage.getItem('18')) : 0;
var c_mobile1260 = parseInt(sessionStorage.getItem('19')) ? parseInt(sessionStorage.getItem('19')) : 0;
var c_contenedor820 = parseInt(sessionStorage.getItem('21')) ? parseInt(sessionStorage.getItem('21')) : 0;
var c_cportacool = parseInt(sessionStorage.getItem('33')) ? parseInt(sessionStorage.getItem('33')) : 0;
var c_fosap = parseInt(sessionStorage.getItem('20')) ? parseInt(sessionStorage.getItem('20')) : 0;

//variables s_serivicos
var s_desaguefs = parseInt(sessionStorage.getItem('34')) ? parseInt(sessionStorage.getItem('34')) : 0
var s_dmvactor = parseInt(sessionStorage.getItem('35')) ? parseInt(sessionStorage.getItem('35')) : 0
var s_dmhidrojet = parseInt(sessionStorage.getItem('36')) ? parseInt(sessionStorage.getItem('36')) : 0
var s_insptuberia = parseInt(sessionStorage.getItem('37')) ? parseInt(sessionStorage.getItem('37')) : 0


const sumarCarrito = (id) => {

    console.log(id);
    var Swal = require('sweetalert2');

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Agregado correctamente'
    })


    switch (id) {
        case 1:
            // console.log('Convencional Azul 1');
            e_convencionalAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_convencionalAzulTotal);
            sessionStorage.setItem(id, e_convencionalAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 2:
            // console.log('Convencional Rosa 2');
            e_convencionalRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_convencionalRosaTotal);
            sessionStorage.setItem(id, e_convencionalRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 3:
            // console.log('Lujo Azul 3');
            e_lujoAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_lujoAzulTotal);
            sessionStorage.setItem(id, e_lujoAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 4:
            // console.log('Lujo Rosa 4');
            e_lujoRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_lujoRosaTotal);
            sessionStorage.setItem(id, e_lujoRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 5:
            // console.log('Capacidades D 5');
            e_capacidadesTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_capacidadesTotal);
            sessionStorage.setItem(id, e_capacidadesTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 6:
            // console.log('Convencional Colores 6');
            e_convencionalColoresTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_convencionalColoresTotal);
            sessionStorage.setItem(id, e_convencionalColoresTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 7:
            // console.log('Fuente Lavamanos 7');
            e_fuenteTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_fuenteTotal);
            sessionStorage.setItem(id, e_fuenteTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 8:
            // console.log('aa');
            e_aaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_aaTotal);
            sessionStorage.setItem(id, e_aaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 9:
            // console.log('Baños mixtos 9');
            e_mixtosTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_mixtosTotal);
            sessionStorage.setItem(id, e_mixtosTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 10:
            // console.log('Black elite 10');
            e_blackEliteTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            // console.log(e_blackEliteTotal);
            sessionStorage.setItem(id, e_blackEliteTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 11:
            e_luxuriaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, e_luxuriaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        ////////////////
        //construccion//
        ////////////////

        case 22:
            c_convencionalAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_convencionalAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 23:
            c_convencionalRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_convencionalRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 24:
            c_lujoAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_lujoAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 25:
            c_lujoRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_lujoRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 26:
            c_capacidadesTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_capacidadesTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 27:
            c_convencionalColoresTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_convencionalColoresTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 28:
            c_fuenteTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_fuenteTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 30:
            c_mixtosTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mixtosTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 13:
            c_mobileVigilancia = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mobileVigilancia.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 14:
            c_mobile820 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mobile820.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 15:
            c_mobile824 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mobile824.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 16:
            c_mobile832 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mobile832.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 17:
            c_mobile844 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mobile844.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 18:
            c_mobile1048 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mobile1048.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 19:
            c_mobile1260 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_mobile1260.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 21:
            c_contenedor820 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_contenedor820.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 33:
            c_cportacool = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_cportacool.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 20:
            c_fosap = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, c_fosap.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        ///////////////
        ///SERVICIOS///
        ///////////////

        case 34:
            s_desaguefs = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, s_desaguefs.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 35:
            s_dmvactor = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, s_dmvactor.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 36:
            s_dmhidrojet = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, s_dmhidrojet.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

        case 37:
            s_insptuberia = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 0) + 1;
            sessionStorage.setItem(id, s_insptuberia.toString());
            document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
            break;

    }

}

const restarCarrito = (id) => {

    console.log(id);


    switch (id) {
        case 1:
            if (e_convencionalAzulTotal <= 0) { break; } else {
                // console.log('Convencional Azul 1');
                e_convencionalAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_convencionalAzulTotal);
                sessionStorage.setItem(id, e_convencionalAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 2:
            if (e_convencionalRosaTotal <= 0) { break; } else {
                // console.log('Convencional Rosa 2');
                e_convencionalRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_convencionalRosaTotal);
                sessionStorage.setItem(id, e_convencionalRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 3:
            if (e_lujoAzulTotal <= 0) { break; } else {
                // console.log('Lujo Azul 3');
                e_lujoAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_lujoAzulTotal);
                sessionStorage.setItem(id, e_lujoAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 4:
            if (e_lujoRosaTotal <= 0) { break; } else {
                // console.log('Lujo Rosa 4');
                e_lujoRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_lujoRosaTotal);
                sessionStorage.setItem(id, e_lujoRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 5:
            if (e_capacidadesTotal <= 0) { break; } else {
                // console.log('Capacidades D 5');
                e_capacidadesTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_capacidadesTotal);
                sessionStorage.setItem(id, e_capacidadesTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 6:
            if (e_convencionalColoresTotal <= 0) { break; } else {
                // console.log('Convencional Colores 6');
                e_convencionalColoresTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_convencionalColoresTotal);
                sessionStorage.setItem(id, e_convencionalColoresTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 7:
            if (e_fuenteTotal <= 0) { break; } else {
                // console.log('Fuente Lavamanos 7');
                e_fuenteTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_fuenteTotal);
                sessionStorage.setItem(id, e_fuenteTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 8:
            if (e_aaTotal <= 0) { break; } else {
                // console.log('aa');
                e_aaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_aaTotal);
                sessionStorage.setItem(id, e_aaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 9:
            if (e_mixtosTotal <= 0) { break; } else {
                // console.log('Baños mixtos 9');
                e_mixtosTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_mixtosTotal);
                sessionStorage.setItem(id, e_mixtosTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 10:
            if (e_blackEliteTotal <= 0) { break; } else {
                // console.log('Black elite 10');
                e_blackEliteTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                // console.log(e_blackEliteTotal);
                sessionStorage.setItem(id, e_blackEliteTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 11:
            if (e_luxuriaTotal <= 0) { break; } else {
                e_luxuriaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, e_luxuriaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }



        case 22:
            if (c_convencionalAzulTotal <= 0) { break; } else {
                c_convencionalAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_convencionalAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 23:
            if (c_convencionalRosaTotal <= 0) { break; } else {
                c_convencionalRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_convencionalRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 24:
            if (c_lujoAzulTotal <= 0) { break; } else {
                c_lujoAzulTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_lujoAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 25:
            if (c_lujoRosaTotal <= 0) { break; } else {
                c_lujoRosaTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_lujoRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 26:
            if (c_capacidadesTotal <= 0) { break; } else {
                c_capacidadesTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_capacidadesTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 27:
            if (c_convencionalColoresTotal <= 0) { break; } else {
                c_convencionalColoresTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_convencionalColoresTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 28:
            if (c_fuenteTotal <= 0) { break; } else {
                c_fuenteTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_fuenteTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 30:
            if (c_mixtosTotal <= 0) { break; } else {
                c_mixtosTotal = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mixtosTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 13:
            if (c_mobileVigilancia <= 0) { break; } else {
                c_mobileVigilancia = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mobileVigilancia.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 14:
            if (c_mobile820 <= 0) { break; } else {
                c_mobile820 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mobile820.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 15:
            if (c_mobile824 <= 0) { break; } else {
                c_mobile824 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mobile824.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 16:
            if (c_mobile832 <= 0) { break; } else {
                c_mobile832 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mobile832.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 17:
            if (c_mobile844 <= 0) { break; } else {
                c_mobile844 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mobile844.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 18:
            if (c_mobile1048 <= 0) { break; } else {
                c_mobile1048 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mobile1048.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 19:
            if (c_mobile1260 <= 0) { break; } else {
                c_mobile1260 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_mobile1260.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 21:
            if (c_contenedor820 <= 0) { break; } else {
                c_contenedor820 = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_contenedor820.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 33:
            if (c_cportacool <= 0) { break; } else {
                c_cportacool = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_cportacool.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 20:
            if (c_fosap <= 0) { break; } else {
                c_fosap = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, c_fosap.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }




        case 34:
            if (s_desaguefs <= 0) { break; } else {
                s_desaguefs = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, s_desaguefs.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 35:
            if (s_dmvactor <= 0) { break; } else {
                s_dmvactor = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, s_dmvactor.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 36:
            if (s_dmhidrojet <= 0) { break; } else {
                s_dmhidrojet = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, s_dmhidrojet.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

        case 37:
            if (s_insptuberia <= 0) { break; } else {
                s_insptuberia = (parseInt(sessionStorage.getItem(id)) ? parseInt(sessionStorage.getItem(id)) : 1) - 1;
                sessionStorage.setItem(id, s_insptuberia.toString());
                document.getElementById(id).innerText = 'Cantidad x' + sessionStorage.getItem(id);
                break;
            }

    }


}

export default SubCatalogo;
