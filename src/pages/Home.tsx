import { IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import ConductingEvents from '../components/ConductingEvents';
import AllEvent from '../components/AllEvents';
import { useHistory } from 'react-router';
import SlideImages from '../components/SlideImages';
import { menuOutline } from 'ionicons/icons';

import './Home.scss';

const Home: React.FC = () => {
  const history = useHistory();

  const toDepartmentsPage = () => {
    history.push('/departments', { direction: 'forward' });
  }

  // TODO: change layout styles to falls
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar className='headerWarpper'>
          <IonTitle slot='secondary'>
            首页
          </IonTitle>
          <IonIcon slot='end' icon={menuOutline} size='large' color='primary' onClick={toDepartmentsPage}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='homeComponentsWarpper'>
          <SlideImages></SlideImages>
          <ConductingEvents></ConductingEvents>
          <AllEvent></AllEvent>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Home;
