import React, { useEffect } from "react";
import Navigation from "./navigation";
import SplashScreen from "react-native-splash-screen";
// import {
//   MobileAds,
//   InterstitialAdManager,
// } from "react-native-yandex-mobile-ads";


// MobileAds.initialize({ userConsent: true, locationConsent: true });

const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 2000);
    SplashScreen.hide()
    // setTimeout(() => {
    //   InterstitialAdManager.showAd("R-M-1959796-1")
    // }, 2000);
  }, []);

  return <Navigation />;
};

export default App;
