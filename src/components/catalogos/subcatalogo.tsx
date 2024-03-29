import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './subcatalogo.css';
import { construccion, evento, servicio } from '../../reducers/data';
import TopBarBlue from '../top-bar/topbarblue';
import { alertCircle } from 'ionicons/icons';
import { NavLink } from 'react-router-dom';

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

    const modalopen = (ficha) => {
        var Swal2 = require('sweetalert2');
        let prod = seleccionarImagenes(data, categoria);

        console.log(prod);


        Swal2.fire({
            title: 'Ficha técnica',
            html: "<p class='ptext1'>" + ficha + "<p>",
            // icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }

    // console.log(productosSeleccionados);
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader >
                    <TopBarBlue />
                </IonHeader>
                <h1 className='categ'>{categoria}</h1>
                {
                    <div className={claseContenedorImg}>
                        {
                            productosSeleccionados.map((producto: any) => (
                                <div className='producto' key={producto.id}>
                                    <a onClick={() => modalopen(producto.ficha)}><img className={producto.tamañoImagen} src={producto.images} alt="imagen del producto" /></a>
                                    <p className='productosName'>{producto.name}</p>
                                    <p className='contador' id={producto.id}>Canitdad x{localStorage.getItem(producto.id) ? localStorage.getItem(producto.id) : 0}</p>
                                    <button className='op' onClick={() => { sumarCarrito(producto.id) }}>Añadir</button>
                                    <button className='op' onClick={() => { restarCarrito(producto.id) }}>Quitar</button>
                                </div>
                            ))
                        }
                    </div>
                }
                <div className='opciones2'>
                    <NavLink to={'/Tab3'}>
                        <button className='op2'>Hacer pedido</button>
                    </NavLink>
                    {/* <button className='op2'>Seguir comprando</button> */}
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
var e_convencionalAzulTotal = parseInt(localStorage.getItem('1')) ? parseInt(localStorage.getItem('1')) : 0;
var e_convencionalRosaTotal = parseInt(localStorage.getItem('2')) ? parseInt(localStorage.getItem('2')) : 0;
var e_lujoAzulTotal = parseInt(localStorage.getItem('3')) ? parseInt(localStorage.getItem('3')) : 0;
var e_lujoRosaTotal = parseInt(localStorage.getItem('4')) ? parseInt(localStorage.getItem('4')) : 0;
var e_capacidadesTotal = parseInt(localStorage.getItem('5')) ? parseInt(localStorage.getItem('5')) : 0;
var e_convencionalColoresTotal = parseInt(localStorage.getItem('6')) ? parseInt(localStorage.getItem('6')) : 0;
var e_fuenteTotal = parseInt(localStorage.getItem('7')) ? parseInt(localStorage.getItem('7')) : 0;
var e_aaTotal = parseInt(localStorage.getItem('8')) ? parseInt(localStorage.getItem('8')) : 0;
var e_mixtosTotal = parseInt(localStorage.getItem('9')) ? parseInt(localStorage.getItem('9')) : 0;
var e_blackEliteTotal = parseInt(localStorage.getItem('10')) ? parseInt(localStorage.getItem('10')) : 0;
var e_luxuriaTotal = parseInt(localStorage.getItem('11')) ? parseInt(localStorage.getItem('11')) : 0;

//variables de preoductos c_construccion
var c_convencionalAzulTotal = parseInt(localStorage.getItem('22')) ? parseInt(localStorage.getItem('22')) : 0;
var c_convencionalRosaTotal = parseInt(localStorage.getItem('23')) ? parseInt(localStorage.getItem('23')) : 0;
var c_lujoAzulTotal = parseInt(localStorage.getItem('24')) ? parseInt(localStorage.getItem('24')) : 0;
var c_lujoRosaTotal = parseInt(localStorage.getItem('25')) ? parseInt(localStorage.getItem('25')) : 0;
var c_capacidadesTotal = parseInt(localStorage.getItem('26')) ? parseInt(localStorage.getItem('26')) : 0;
var c_convencionalColoresTotal = parseInt(localStorage.getItem('27')) ? parseInt(localStorage.getItem('27')) : 0;
var c_fuenteTotal = parseInt(localStorage.getItem('28')) ? parseInt(localStorage.getItem('28')) : 0;
var c_mixtosTotal = parseInt(localStorage.getItem('30')) ? parseInt(localStorage.getItem('30')) : 0;
var c_mobileVigilancia = parseInt(localStorage.getItem('13')) ? parseInt(localStorage.getItem('13')) : 0;
var c_mobile820 = parseInt(localStorage.getItem('14')) ? parseInt(localStorage.getItem('14')) : 0;
var c_mobile824 = parseInt(localStorage.getItem('15')) ? parseInt(localStorage.getItem('15')) : 0;
var c_mobile832 = parseInt(localStorage.getItem('16')) ? parseInt(localStorage.getItem('16')) : 0;
var c_mobile844 = parseInt(localStorage.getItem('17')) ? parseInt(localStorage.getItem('17')) : 0;
var c_mobile1048 = parseInt(localStorage.getItem('18')) ? parseInt(localStorage.getItem('18')) : 0;
var c_mobile1260 = parseInt(localStorage.getItem('19')) ? parseInt(localStorage.getItem('19')) : 0;
var c_contenedor820 = parseInt(localStorage.getItem('21')) ? parseInt(localStorage.getItem('21')) : 0;
var c_cportacool = parseInt(localStorage.getItem('33')) ? parseInt(localStorage.getItem('33')) : 0;
var c_fosap = parseInt(localStorage.getItem('20')) ? parseInt(localStorage.getItem('20')) : 0;

//variables s_serivicos
var s_desaguefs = parseInt(localStorage.getItem('34')) ? parseInt(localStorage.getItem('34')) : 0
var s_dmvactor = parseInt(localStorage.getItem('35')) ? parseInt(localStorage.getItem('35')) : 0
var s_dmhidrojet = parseInt(localStorage.getItem('36')) ? parseInt(localStorage.getItem('36')) : 0
var s_insptuberia = parseInt(localStorage.getItem('37')) ? parseInt(localStorage.getItem('37')) : 0


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
            e_convencionalAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_convencionalAzulTotal);
            localStorage.setItem(id, e_convencionalAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 2:
            // console.log('Convencional Rosa 2');
            e_convencionalRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_convencionalRosaTotal);
            localStorage.setItem(id, e_convencionalRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 3:
            // console.log('Lujo Azul 3');
            e_lujoAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_lujoAzulTotal);
            localStorage.setItem(id, e_lujoAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 4:
            // console.log('Lujo Rosa 4');
            e_lujoRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_lujoRosaTotal);
            localStorage.setItem(id, e_lujoRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 5:
            // console.log('Capacidades D 5');
            e_capacidadesTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_capacidadesTotal);
            localStorage.setItem(id, e_capacidadesTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 6:
            // console.log('Convencional Colores 6');
            e_convencionalColoresTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_convencionalColoresTotal);
            localStorage.setItem(id, e_convencionalColoresTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 7:
            // console.log('Fuente Lavamanos 7');
            e_fuenteTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_fuenteTotal);
            localStorage.setItem(id, e_fuenteTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 8:
            // console.log('aa');
            e_aaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_aaTotal);
            localStorage.setItem(id, e_aaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 9:
            // console.log('Baños mixtos 9');
            e_mixtosTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_mixtosTotal);
            localStorage.setItem(id, e_mixtosTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 10:
            // console.log('Black elite 10');
            e_blackEliteTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            // console.log(e_blackEliteTotal);
            localStorage.setItem(id, e_blackEliteTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 11:
            e_luxuriaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, e_luxuriaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        ////////////////
        //construccion//
        ////////////////

        case 22:
            c_convencionalAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_convencionalAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 23:
            c_convencionalRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_convencionalRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 24:
            c_lujoAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_lujoAzulTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 25:
            c_lujoRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_lujoRosaTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 26:
            c_capacidadesTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_capacidadesTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 27:
            c_convencionalColoresTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_convencionalColoresTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 28:
            c_fuenteTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_fuenteTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 30:
            c_mixtosTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mixtosTotal.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 13:
            c_mobileVigilancia = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mobileVigilancia.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 14:
            c_mobile820 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mobile820.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 15:
            c_mobile824 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mobile824.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 16:
            c_mobile832 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mobile832.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 17:
            c_mobile844 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mobile844.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 18:
            c_mobile1048 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mobile1048.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 19:
            c_mobile1260 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_mobile1260.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 21:
            c_contenedor820 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_contenedor820.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 33:
            c_cportacool = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_cportacool.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 20:
            c_fosap = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, c_fosap.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        ///////////////
        ///SERVICIOS///
        ///////////////

        case 34:
            s_desaguefs = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, s_desaguefs.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 35:
            s_dmvactor = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, s_dmvactor.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 36:
            s_dmhidrojet = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, s_dmhidrojet.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

        case 37:
            s_insptuberia = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 0) + 1;
            localStorage.setItem(id, s_insptuberia.toString());
            document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
            break;

    }

}

const restarCarrito = (id) => {

    console.log(id);


    switch (id) {
        case 1:
            if (e_convencionalAzulTotal <= 0) { break; } else {
                // console.log('Convencional Azul 1');
                e_convencionalAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_convencionalAzulTotal);
                localStorage.setItem(id, e_convencionalAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 2:
            if (e_convencionalRosaTotal <= 0) { break; } else {
                // console.log('Convencional Rosa 2');
                e_convencionalRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_convencionalRosaTotal);
                localStorage.setItem(id, e_convencionalRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 3:
            if (e_lujoAzulTotal <= 0) { break; } else {
                // console.log('Lujo Azul 3');
                e_lujoAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_lujoAzulTotal);
                localStorage.setItem(id, e_lujoAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 4:
            if (e_lujoRosaTotal <= 0) { break; } else {
                // console.log('Lujo Rosa 4');
                e_lujoRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_lujoRosaTotal);
                localStorage.setItem(id, e_lujoRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 5:
            if (e_capacidadesTotal <= 0) { break; } else {
                // console.log('Capacidades D 5');
                e_capacidadesTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_capacidadesTotal);
                localStorage.setItem(id, e_capacidadesTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 6:
            if (e_convencionalColoresTotal <= 0) { break; } else {
                // console.log('Convencional Colores 6');
                e_convencionalColoresTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_convencionalColoresTotal);
                localStorage.setItem(id, e_convencionalColoresTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 7:
            if (e_fuenteTotal <= 0) { break; } else {
                // console.log('Fuente Lavamanos 7');
                e_fuenteTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_fuenteTotal);
                localStorage.setItem(id, e_fuenteTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 8:
            if (e_aaTotal <= 0) { break; } else {
                // console.log('aa');
                e_aaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_aaTotal);
                localStorage.setItem(id, e_aaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 9:
            if (e_mixtosTotal <= 0) { break; } else {
                // console.log('Baños mixtos 9');
                e_mixtosTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_mixtosTotal);
                localStorage.setItem(id, e_mixtosTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 10:
            if (e_blackEliteTotal <= 0) { break; } else {
                // console.log('Black elite 10');
                e_blackEliteTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                // console.log(e_blackEliteTotal);
                localStorage.setItem(id, e_blackEliteTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 11:
            if (e_luxuriaTotal <= 0) { break; } else {
                e_luxuriaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, e_luxuriaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }



        case 22:
            if (c_convencionalAzulTotal <= 0) { break; } else {
                c_convencionalAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_convencionalAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 23:
            if (c_convencionalRosaTotal <= 0) { break; } else {
                c_convencionalRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_convencionalRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 24:
            if (c_lujoAzulTotal <= 0) { break; } else {
                c_lujoAzulTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_lujoAzulTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 25:
            if (c_lujoRosaTotal <= 0) { break; } else {
                c_lujoRosaTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_lujoRosaTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 26:
            if (c_capacidadesTotal <= 0) { break; } else {
                c_capacidadesTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_capacidadesTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 27:
            if (c_convencionalColoresTotal <= 0) { break; } else {
                c_convencionalColoresTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_convencionalColoresTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 28:
            if (c_fuenteTotal <= 0) { break; } else {
                c_fuenteTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_fuenteTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 30:
            if (c_mixtosTotal <= 0) { break; } else {
                c_mixtosTotal = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mixtosTotal.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 13:
            if (c_mobileVigilancia <= 0) { break; } else {
                c_mobileVigilancia = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mobileVigilancia.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 14:
            if (c_mobile820 <= 0) { break; } else {
                c_mobile820 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mobile820.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 15:
            if (c_mobile824 <= 0) { break; } else {
                c_mobile824 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mobile824.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 16:
            if (c_mobile832 <= 0) { break; } else {
                c_mobile832 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mobile832.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 17:
            if (c_mobile844 <= 0) { break; } else {
                c_mobile844 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mobile844.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 18:
            if (c_mobile1048 <= 0) { break; } else {
                c_mobile1048 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mobile1048.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 19:
            if (c_mobile1260 <= 0) { break; } else {
                c_mobile1260 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_mobile1260.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 21:
            if (c_contenedor820 <= 0) { break; } else {
                c_contenedor820 = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_contenedor820.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 33:
            if (c_cportacool <= 0) { break; } else {
                c_cportacool = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_cportacool.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 20:
            if (c_fosap <= 0) { break; } else {
                c_fosap = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, c_fosap.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }




        case 34:
            if (s_desaguefs <= 0) { break; } else {
                s_desaguefs = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, s_desaguefs.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 35:
            if (s_dmvactor <= 0) { break; } else {
                s_dmvactor = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, s_dmvactor.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 36:
            if (s_dmhidrojet <= 0) { break; } else {
                s_dmhidrojet = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, s_dmhidrojet.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

        case 37:
            if (s_insptuberia <= 0) { break; } else {
                s_insptuberia = (parseInt(localStorage.getItem(id)) ? parseInt(localStorage.getItem(id)) : 1) - 1;
                localStorage.setItem(id, s_insptuberia.toString());
                document.getElementById(id).innerText = 'Cantidad x' + localStorage.getItem(id);
                break;
            }

    }


}

export default SubCatalogo;
