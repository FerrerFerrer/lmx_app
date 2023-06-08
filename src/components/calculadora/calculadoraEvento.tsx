import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react"
import TopBarBlue from "../top-bar/topbarblue";
import './calculadoraEvento.css';
import { useState } from "react";

var output = document.getElementById('demo1');
let baños = 1;


const CalculadoraEvento: React.FC = () => {

    const [asistentes, nasistentes] = useState(0);

    const changeAsistentes = (event) => {
        nasistentes(event.target.value);
    };

    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <TopBarBlue />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="cuerpo">
                    <div className="slide-contenedor">
                        <div className="slider-range">
                            <h2>ASISTENTES PARA EVENTO</h2>
                            <h4>{asistentes}</h4>
                            <input value={asistentes} type="range" min={1} max={100} className="slider" id="myRange" onChange={changeAsistentes} />
                        </div>
                        <div className="horas-contenedor">
                            <h2>Asistentes</h2>
                            <p>Día más largo</p>
                            <div>
                                <input type="radio" name="options" id="6h" />
                                <label htmlFor="6h">6<br />HRS</label>
                            </div>
                            <div>
                                <input type="radio" name="options" id="12h" />
                                <label htmlFor="12h">12<br />HRS</label>
                            </div>
                        </div>
                        <input type="submit" id="btnBaños" className="btnBaños" value="Calcular" onClick={() => getBaños(baños)} />
                    </div>
                </div>
            </IonContent>
        </IonPage >
    )
}


const getBaños = (baños: any) => {
    if (baños != null) {
        localStorage.setItem('myKey', baños); if (output != null) { output.innerHTML = baños; }
    }
};
export default CalculadoraEvento;