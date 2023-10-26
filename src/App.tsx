import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

/* Components */
import BottomNaviBar from './components/BottomNaviBar';
import ThemeChange from './components/ThemeChange'

/* Pages */
import Login from './pages/Login';
import OAuth from './pages/OAuth';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <ThemeChange>
          <Route path="/">
            <BottomNaviBar></BottomNaviBar>
          </Route>
          <Route path="/oauth" component={OAuth}></Route>
          <Route path="/login" component={Login}></Route>
          {/* <Route path="/event/:eventId" component={Event}></Route> */}
        </ThemeChange>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
