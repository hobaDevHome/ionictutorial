import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import loginImage from "../assets/WatchingYouEmoji.jpg";
import logo from "../assets/logo.png";

const Register: React.FC = () => {
  const router = useIonRouter();
  const registerHandle = (event: any) => {
    event.preventDefault();
    console.log("register");
    router.goBack();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"} className="ion-padding-start">
          <IonButton slot="start">
            <IonBackButton defaultHref="/" />
          </IonButton>

          <IonTitle className="ion-padding-start">Threat Watch App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle className="ion-text-center">Create account</IonTitle>
        <div className="ion-text-center">
          <img src={loginImage} alt="login  image" />
        </div>
        <IonCard>
          <IonCardContent>
            <form>
              <IonInput
                type="email"
                label="Email"
                labelPlacement="floating"
                fill="outline"
                placeholder="enter email"
              ></IonInput>
              <IonInput
                className="ion-margin-top"
                type="password"
                label="Password"
                labelPlacement="floating"
                fill="outline"
                placeholder="enter password"
              ></IonInput>

              <IonButton
                className="ion-margin-top"
                onClick={registerHandle}
                expand="block"
                color={"secondary"}
                type="button"
                routerLink="/register"
              >
                Create account
                <IonIcon slot="end" icon={personCircleOutline}></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
