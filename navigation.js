import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Food } from "./components/fields/food.component";
import { Vocabulary } from "./components/vocabulary/vocabulary.component";
import { VocabularyParts } from "./components/vocabularyParts/vocabularyParts";
import { VocabularySpeechParts } from "./components/vocabularySpeechParts/vocabularySpeechParts";
import { Subsections } from "./components/vocabularySubsections/vocabularySubsections";
import { Settings } from "./components/settings/settings.component";
import React, { useState } from "react";
import { Image, Platform } from "react-native";
import { COLORS } from "./colors";
import { Fruit } from "./components/content/fruit";
import { Vegetables } from "./components/content/vegetables";
import { Berries } from "./components/content/berries";
import { WordSelected } from "./components/wordSelected/wordSelected";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const VocabularyName = "Vocabulary";
const VocabularyComponentName = "Languages";
const VocabularyPartsName = "Parts"
const VocabularySpeechPartsName = "Speech Parts"
const VocabularySubSectionsName = "Subsections";
const SettingsName = "Settings";
const FoodName = "Food"
const FruitName = "Fruit"
const VegetablesName = "Vegetables"
const BerriesName = "Berries"
const WordSelectedName = "Selected Word"

const darkMode = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "rgb(105, 115, 125)",    
  },
};

export const iconSize = {width: 30, height: 30}
export const arrowSize = {width: 20, height: 20}

export const Context = React.createContext();

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false}} initialRouteName={VocabularyName}>
    <Stack.Screen name={VocabularyComponentName} component={Vocabulary} />
    <Stack.Screen name={VocabularyPartsName} component={VocabularyParts} />
    <Stack.Screen name={VocabularySubSectionsName} component={Subsections} />
    <Stack.Screen name={VocabularySpeechPartsName} component={VocabularySpeechParts} />
    <Stack.Screen name={FoodName} component={Food} />
    <Stack.Screen name={FruitName} component={Fruit} />
    <Stack.Screen name={BerriesName} component={Berries} />
    <Stack.Screen name={VegetablesName} component={Vegetables} />
    <Stack.Screen name={WordSelectedName} component={WordSelected} options={({route}) => ({title: route.params.khadar.charAt(0).toUpperCase() + route.params.khadar.substring(1)})} />
  </Stack.Navigator>
)

const Navigation = () => {
  const [alignment, setAlignment] = useState(false)
  const [dark, setDark] = useState(false);
  const dynamicColor = dark ? COLORS.WHITE : COLORS.VEINY_RED
  const isDarkTheme = dark ? darkMode : DefaultTheme
  const iosPadding = Platform.OS === "ios" ? 20 : 0
  return (
    <Context.Provider value={{dark, setDark, alignment, setAlignment, dynamicColor, iosPadding}}>
      <NavigationContainer theme={isDarkTheme}>
        <Tab.Navigator
          initialRouteName={VocabularyName}
          screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: COLORS.CLOUDY_BLUE, tabBarLabel: () => null, tabBarInactiveBackgroundColor: dark ? COLORS.DARK_GRAY : COLORS.WHITE }}                              
        >
          <Tab.Screen name={VocabularyName} component={StackNavigation}  options={{tabBarIcon: () => (
            <Image source={require("./assets/sections/vocabulary.png")}  style={iconSize} />
          )}}
           />
          <Tab.Screen name={SettingsName} component={Settings} options={{headerShown: true, tabBarIcon: () => (
            <Image source={require("./assets/sections/settings.png")} style={iconSize} />
          )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Navigation;
