import React, { useEffect } from "react";
import Navigation from "./navigation";
import {
  MobileAds,
  InterstitialAdManager,
} from "react-native-yandex-mobile-ads";
import SplashScreen from "react-native-splash-screen";

MobileAds.initialize({ userConsent: true, locationConsent: true });

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      InterstitialAdManager.showAd("R-M-1959796-1")
    }, 2000);
  }, []);

  return <Navigation />;
};

export default App;
