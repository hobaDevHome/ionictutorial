import {
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
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import loginImage from "../assets/WatchingYouEmoji.jpg";
import logo from "../assets/logo.png";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();
  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  const logniHandle = async (event: any) => {
    event.preventDefault();
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };
  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  if (!introSeen) {
    return <Intro onFinish={finishIntro} />;
  }
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
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="ion-text-center">
                <IonTitle className="ion-text-center">
                  Login to your account
                </IonTitle>
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
                    <IonButton
                      onClick={seeIntroAgain}
                      fill="clear"
                      size="small"
                      color={"medium"}
                      type="button"
                      expand="block"
                      className="ion-margin-top"
                    >
                      Watch intro again
                      <IonIcon icon={personCircleOutline} slot="end" />
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

export default Login;
