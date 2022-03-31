import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';
import Chart from "react-apexcharts";

const Tab2: React.FC = () => {

  const initialData = {
    options: {
      chart: {
        id: "basic-bar2"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [130, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

  const [currentState, setState] = useState(initialData);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Chart options={currentState.options} series={currentState.series} type="bar" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
