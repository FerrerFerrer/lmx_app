import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react"
import TopBarBlue from "../top-bar/topbarblue";
import './calculadoraConstruccion.css';
import { useState } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

var output = document.getElementById('demo1');
let baños = 10;
const CalculadoraConstruccion: React.FC = () => {

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
        }else{
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
            if (inputValue.isConfirmed===true) {
                sessionStorage.setItem('1', (Math.ceil(baños)).toString());
                window.location.href = '/Tab3';
              } else {
                return;
              }
        });
    }

    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <TopBarBlue />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="cuerpo">
                    <form method="post" onSubmit={calcular}>
                        <h1 className="tituloIndexC">Baños para construccion</h1>
                        <div className="slide-contenedor">
                            <div className="slider-range">
                                <h3>TRABAJADORES</h3>
                                <h4>{trabajadores}</h4>
                                <input value={trabajadores} type='range' min={1} max={500} step={1} name="trabajadores" className="slider" onChange={handleTrabChange} />
                            </div>
                            <div className="jornada-contenedor ">
                                <label className="check-container ">Jornada de 8 hrs
                                    <input type="checkbox" name="jornada" defaultChecked={true} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="divBaños">
                                <button className="btnBaños"> Calcular</button>
                            </div>
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage >
    )
}
export default CalculadoraConstruccion;