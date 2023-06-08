import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bag, personSharp, homeSharp, ellipsisHorizontal } from 'ionicons/icons';
// routes
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

import Password from './components/recoveryPassword/password';
import Register from './components/register/register';
import Catalogo from './components/catalogos/catalogo';

import FormularioCotizar from './components/perfil/formularioCotizar';

import Productos from './components/catalogos/productos';
import Perfil from './components/perfil/perfil';
import MisDatos from './components/perfil/misdatos/misdatos';
import Pedidos from './components/perfil/pedidos';


import Sucursales from './components/perfil/sucursales';



import './app.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

// boostsrap
import "bootstrap/dist/css/bootstrap.min.css";
import SubCatalogo from './components/catalogos/subcatalogo';
import CalculadoraEvento from './components/calculadora/calculadoraEvento';
import CalculadoraConstruccion from './components/calculadora/calculadoraConstruccion';
import CalculadoraIndex from './components/calculadora/calculadoraIndex';
import Resultado from './components/calculadora/resultado';
import { waitFor } from '@testing-library/react';
setupIonicReact();


const App: React.FC = () => {
  const borrarStorage = () => {
    localStorage.removeItem('area');
    localStorage.removeItem('categoria');
    console.log("borrado")
  }
  const borrarStorageTienda = () => {
    localStorage.removeItem('area');
    localStorage.removeItem('categoria');
    console.log("borrado");
    // document.location.reload();

  }
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route path="/Sucursales">
              <Sucursales />
            </Route>
            <Route path="/Pedidos">
              <Pedidos />
            </Route>
            <Route path="/formularioCotizar">
              <FormularioCotizar/>
            </Route>
            <Route path="/calculadoraIndex">
              <CalculadoraIndex />
            </Route>
            <Route path="/calculadoraConstruccion">
              <CalculadoraConstruccion />
            </Route>
            <Route path="/calculadoraEvento">
              <CalculadoraEvento />
            </Route>
            <Route path="/resultadoCalculadora/:calculo">
              <Resultado />
            </Route>
            <Route path="/productos">
              <Productos />
            </Route>
            <Route path="/catalogo">
              <Catalogo />
            </Route>
            <Route path="/subcatalogo">
              <SubCatalogo />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/password">
              <Password />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/perfil">
              <Perfil />
            </Route>
            <Route path="/misdatos">
              <MisDatos />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route path="/tab4">
              <Tab4 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1" onClick={() => { borrarStorage() }}>
              <IonIcon aria-hidden="true" icon={homeSharp} />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2" onClick={() => { borrarStorage() }}>
              <IonIcon aria-hidden="true" icon={personSharp} />
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3" onClick={() => { borrarStorageTienda() }}>
              <IonIcon aria-hidden="true" icon={bag} />
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4" onClick={() => { borrarStorage() }}>
              <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
};

export default App; 