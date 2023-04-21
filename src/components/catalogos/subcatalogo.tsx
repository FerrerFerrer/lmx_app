import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './subcatalogo.css';
import { construccion, evento, servicio } from '../../reducers/data';
import TopBarBlue from '../top-bar/topbarblue';

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
                                    <p className='contador'>Cantidad x0</p>
                                    <button className='op'>Añadir</button>
                                    <button className='op'>Quitar</button>
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

export default SubCatalogo;
