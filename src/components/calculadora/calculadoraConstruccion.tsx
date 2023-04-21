import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react"
import TopBarBlue from "../top-bar/topbarblue";
import './calculadoraConstruccion.css';
import { useState } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

var output = document.getElementById('demo1');
let baños = 1;
const CalculadoraConstruccion: React.FC = () => {
    const bañosSugeridos = 0;
    const [trabajadores, ntrabajadores] = useState(0);

    const changeTrabajadores = (event) => {
        ntrabajadores(event.target.value);
    };

    const calcularBañosConstruccion = () => {
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
        }
    }

    const calcularBaños = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
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
                    <form method="post" onSubmit={calcularBaños}>
                        <h1 className="tituloIndexC">Baños para construccion</h1>
                        <div className="slide-contenedor">
                            <div className="slider-range">
                                <h3>TRABAJADORES</h3>
                                <h4>{trabajadores}</h4>
                                <input value={trabajadores} type='range' min={1} max={100} step={1} name="trabajadores" className="slider" onChange={changeTrabajadores} />
                            </div>
                            <div className="jornada-contenedor ">
                                <label className="check-container ">Jornada de 8 hrs
                                    <input type="checkbox" name="jornada" defaultChecked={true} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="divBaños">
                                <NavLink to={"/resultadoCalculadora/" +{bañosSugeridos}} >
                                    <button className="btnBaños"> Calcular</button>
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage >
    )
}
export default CalculadoraConstruccion;