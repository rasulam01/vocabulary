/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import Navigation from "./navigation";
import {
  MobileAds,
  InterstitialAdManager,
} from "react-native-yandex-mobile-ads";

MobileAds.initialize({ userConsent: true, locationConsent: true });



  InterstitialAdManager.showAd("R-M-1959796-1")
  .then((didClick) => {
    console.log("clicked: " + didClick);
  })
  .catch((error) => {
    console.log("error: " + error);
  });

const App = () => <Navigation />;

export default App;
