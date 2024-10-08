import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
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
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonTitle className="ion-text-center">Create account</IonTitle>
              <div className="ion-text-center">
                <img
                  src={loginImage}
                  alt="login  image"
                  style={{ display: "block" }}
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
