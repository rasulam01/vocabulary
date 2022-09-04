import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Menu } from "./components/menu/menu.component";
import { Vocabulary } from "./components/vocabulary/vocabulary.component";
import { Settings } from "./components/settings/settings.component";
import React, { useState } from "react";
import { Image } from "react-native";
import { COLORS } from "./colors";



const Tab = createBottomTabNavigator();
const MenuName = "Menu";
const VocabularyName = "Vocabulary";
const SettingsName = "Settings";

const darkMode = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "rgb(95, 105, 115)",    
  },
};

export const iconSize = {width: 30, height: 30}


export const Context = React.createContext();

const Navigation = () => {
  const [dark, setDark] = useState(false);
  const dynamicColor = dark ? COLORS.WHITE : COLORS.VEINY_RED
  const isDarkTheme = dark ? darkMode : DefaultTheme
  return (
    <Context.Provider value={{dark, setDark, dynamicColor}}>
      <NavigationContainer theme={isDarkTheme}>
        <Tab.Navigator
          initialRouteName={VocabularyName}
          screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: COLORS.CLOUDY_BLUE, tabBarLabel: () => null, tabBarInactiveBackgroundColor: dark ? COLORS.DARK_GRAY : COLORS.WHITE }}                              
          s
        >
          <Tab.Screen name={MenuName} component={Menu} options={{tabBarIcon: () => (
            <Image source={require("./assets/menu.png")}  style={iconSize} />
          )}} />
          <Tab.Screen name={VocabularyName} component={Vocabulary} options={{tabBarIcon: () => (
            <Image source={require("./assets/vocabulary.png")} style={iconSize} />
          )}} />
          <Tab.Screen name={SettingsName} component={Settings} options={{tabBarIcon: () => (
            <Image source={require("./assets/settings.png")} style={iconSize} />
          )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Navigation;
