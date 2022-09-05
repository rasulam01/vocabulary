import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Food } from "./components/fields/food.component";
import { Menu } from "./components/menu/menu.component";
import { Vocabulary } from "./components/vocabulary/vocabulary.component";
import { Subsections } from "./components/vocabularySubsections/vocabularySubsections";
import { Settings } from "./components/settings/settings.component";
import React, { useState } from "react";
import { Image, Platform } from "react-native";
import { COLORS } from "./colors";
import { Fruit } from "./components/content/fruit";





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MenuName = "Menu";
const VocabularyName = "Vocabulary";
const VocabularyComponentName = "Languages";
const SettingsName = "Settings";
const VocabularySubSectionsName = "Subsections";
const FoodName = "Food"
const FruitName = "Fruit"
const FruitContentName = "FruitContent"
const VegetablesName = "Vegetables"

const darkMode = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "rgb(95, 105, 115)",    
  },
};

export const iconSize = {width: 30, height: 30}
export const arrowSize = {width: 20, height: 20}


export const Context = React.createContext();

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false}} initialRouteName={VocabularyName}>
    <Stack.Screen name={VocabularyComponentName} component={Vocabulary} />
    <Stack.Screen name={VocabularySubSectionsName} component={Subsections} />
    <Stack.Screen name={FoodName} component={Food} />
    <Stack.Screen name={FruitName} component={Fruit} />
  </Stack.Navigator>
)





const Navigation = () => {
  const [dark, setDark] = useState(false);
  const dynamicColor = dark ? COLORS.WHITE : COLORS.VEINY_RED
  const isDarkTheme = dark ? darkMode : DefaultTheme
  const androidPadding = Platform.OS === "android" ? 20 : 0
  const iosPadding = Platform.OS === "ios" ? 20 : 0
  return (
    <Context.Provider value={{dark, setDark, dynamicColor, androidPadding, iosPadding, VocabularySubSectionsName}}>
      <NavigationContainer theme={isDarkTheme}>
        <Tab.Navigator
          initialRouteName={VocabularyName}
          screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: COLORS.CLOUDY_BLUE, tabBarLabel: () => null, tabBarInactiveBackgroundColor: dark ? COLORS.DARK_GRAY : COLORS.WHITE }}                              
        >
          <Tab.Screen name={MenuName} component={Menu} options={{tabBarIcon: () => (
            <Image source={require("./assets/menu.png")}  style={iconSize} />
          )}} />
          <Tab.Screen name={VocabularyName} component={StackNavigation}  options={{tabBarIcon: () => (
            <Image source={require("./assets/vocabulary.png")}  style={iconSize} />
          )}}
           />
          <Tab.Screen name={SettingsName} component={Settings} options={{tabBarIcon: () => (
            <Image source={require("./assets/settings.png")} style={iconSize} />
          )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Navigation;
