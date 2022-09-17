import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { COLORS } from "./colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, Platform, StatusBar } from "react-native";
import { Animals } from "./components/fields/animals.component";
import { Berries } from "./components/content/berries";
import { Birds } from "./components/content/birds";
import { BodyParts } from "./components/fields/body_parts.component";
import { Crawling } from "./components/content/crawling";
import { Dairy } from "./components/content/dairy";
import { Events } from "./components/content/events";
import { Food } from "./components/fields/food.component";
import { Fruit } from "./components/content/fruit";
import { Grain } from "./components/content/grain";
import { Greenness } from "./components/content/greenness";
import { Insects } from "./components/content/insects";
import { Mammals } from "./components/content/mammals";
import { Nature } from "./components/fields/nature.component";
import { Other } from "./components/content/other";
import { Subsections } from "./components/vocabularySubsections/vocabularySubsections";
import { Settings } from "./components/settings/settings.component";
import { Trees } from "./components/content/trees";
import { Vegetables } from "./components/content/vegetables";
import { Vocabulary } from "./components/vocabulary/vocabulary.component";
import { VocabularyParts } from "./components/vocabularyParts/vocabularyParts";
import { VocabularySpeechParts } from "./components/vocabularySpeechParts/vocabularySpeechParts";
import { WordSelected } from "./components/wordSelected/wordSelected";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AnimalsName = "Animals"
const BerriesName = "Berries"
const BirdsName = "Birds"
const BodyPartsName = "Body Parts"
const CrawlingName = "Crawling"
const DairyName = "Dairy"
const EventsName = "Events"
const FoodName = "Food"
const FruitName = "Fruit"
const GrainName = "Grain"
const GreennessName = "Greenness"
const InsectsName = "Insects"
const MammalsName = "Mammals"
const NatureName = "Nature"
const OtherName = "Other"
const SettingsName = "Settings";
const TreesName = "Trees";
const VegetablesName = "Vegetables"
const VocabularyName = "Vocabulary";
const VocabularyComponentName = "Languages";
const VocabularyPartsName = "Parts"
const VocabularySpeechPartsName = "Speech Parts"
const VocabularySubSectionsName = "Subsections";
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
    <Stack.Screen name={AnimalsName} component={Animals} />
    <Stack.Screen name={BirdsName} component={Birds} />
    <Stack.Screen name={BodyPartsName} component={BodyParts} />
    <Stack.Screen name={CrawlingName} component={Crawling} />
    <Stack.Screen name={DairyName} component={Dairy} />
    <Stack.Screen name={EventsName} component={Events} />
    <Stack.Screen name={FoodName} component={Food} />
    <Stack.Screen name={FruitName} component={Fruit} />
    <Stack.Screen name={GrainName} component={Grain} />
    <Stack.Screen name={GreennessName} component={Greenness} />
    <Stack.Screen name={InsectsName} component={Insects} />
    <Stack.Screen name={BerriesName} component={Berries} />
    <Stack.Screen name={MammalsName} component={Mammals} />
    <Stack.Screen name={NatureName} component={Nature} />
    <Stack.Screen name={OtherName} component={Other} />
    <Stack.Screen name={TreesName} component={Trees} />
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
        <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
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
