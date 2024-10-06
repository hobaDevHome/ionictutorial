import {
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
} from "@ionic/react";
import React from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import loginImage from "../assets/WatchingYouEmoji.jpg";
import logo from "../assets/logo.png";

const Login: React.FC = () => {
  const logniHandle = (event: any) => {
    event.preventDefault();
    console.log("logged in");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"} className="ion-padding-start">
          <div
            className="ion-padding"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img src={logo} alt="logo" width={"30px"} />
            <IonTitle className="ion-padding-start">Threat Watch App</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle className="ion-text-center">Login to your account</IonTitle>
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
                onClick={logniHandle}
                expand="block"
              >
                <IonIcon slot="end" icon={logInOutline}></IonIcon>
                Login
              </IonButton>
              <IonButton
                className="ion-margin-top"
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

export default Login;
