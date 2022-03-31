import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react';
import Chart from "react-apexcharts";

const Tab1: React.FC = () => {

  const opts: any = {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "75%"
        },
        track: {
          show: true,
          opacity: 0.2,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: 50,
            fontSize: "13px"
          },
          value: {
            fontSize: "50px",
            fontWeight: 600,
            offsetY: 0,
            show: true,
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 1,
        type: "horizontal",
        stops: [0, 100],
        opacityFrom: 1,
        opacityTo: 1
      }
    },
    stroke: {
      lineCap: "round" as const
    },
    labels: ["remaining"]
  };

  const [currentState, setState] = useState([70]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Chart options={opts}
        series={[70]}
        type="radialBar"
        width="100%"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
