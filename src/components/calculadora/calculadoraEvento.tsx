import { IonCol, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react"
import TopBarBlue from "../top-bar/topbarblue";
import './calculadoraEvento.css';
import { useState } from "react";




const CalculadoraEvento: React.FC = () => {

    const [trabajadores, setTrab] = useState(0);
    const handleTrabChange = (e: any) => { setTrab(e.target.value); }

    const calcular = (e) => {
        e.preventDefault();
        let baños = 0;
        if (trabajadores >= 1 && trabajadores <= 20) {
            baños = 1;
        } else if (trabajadores >= 21 && trabajadores <= 40) {
            baños = 2;
        } else if (trabajadores >= 41 && trabajadores <= 60) {
            baños = 3;
        } else if (trabajadores >= 61 && trabajadores <= 80) {
            baños = 4;
        } else if (trabajadores >= 81 && trabajadores <= 100) {
            baños = 5;
        } else {
            baños = trabajadores / 20;
        }

        var Swal2 = require('sweetalert2');

        Swal2.fire({
            title: 'Calculadora de Baños',
            html: 'Para los datos ingresados se recomienda una cantidad de <br> <br> <h1>' + Math.ceil(baños) + ' baño(s)</h1> <br> *Por cada 4 baños se recomienda rentar 1 fuente lavamanos.',
            showCancelButton: true,
            confirmButtonText: 'Agregar al carrito',
            cancelButtonText: 'Cancelar',


        }).then(function (inputValue) {
            if (inputValue.isConfirmed === true) {
                sessionStorage.setItem('1', (Math.ceil(baños)).toString());
                window.location.href = '/Tab3';
            } else {
                return;
            }
        });
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader >
                    <TopBarBlue />
                </IonHeader>
                <div className="cuerpo">
                    <div className="slide-contenedor">
                        <form onSubmit={calcular}>
                            <div className="slider-range">
                                <h2>ASISTENTES PARA EVENTO</h2>
                                <h4>{trabajadores}</h4>
                                <input value={trabajadores} type="range" min={1} max={500} className="slider" id="myRange" onChange={handleTrabChange} />
                            </div>
                            <div className="horas-contenedor">
                                <h2>Asistentes</h2>
                                <p>Día más largo</p>

                                <IonCol>
                                    <input type="radio" name="options" id="6h" />
                                    <label htmlFor="6h">6<br />HRS</label>
                                </IonCol>
                                <IonCol>
                                    <input type="radio" name="options" id="8h" />
                                    <label htmlFor="8h">8<br />HRS</label>
                                </IonCol>
                                <IonCol>
                                    <input type="radio" name="options" id="12h" />
                                    <label htmlFor="12h">12<br />HRS</label>
                                </IonCol>

                            </div>
                            <input type="submit" id="btnBaños" className="btnBaños" value="Calcular" />
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage >
    )
}

export default CalculadoraEvento;