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
import { Adjectives } from "./components/adjectives/adjectives";
import { Adverbs } from "./components/adverbs/adverbs";
import { Animals } from "./components/fields/animals.component";
import { Berries } from "./components/content/berries";
import { Birds } from "./components/content/birds";
import { BodyParts } from "./components/fields/body_parts.component";
import { Clothes } from "./components/fields/clothes.component";
import { Crawling } from "./components/content/crawling";
import { Dairy } from "./components/content/dairy";
import { Events } from "./components/content/events";
import { Food } from "./components/fields/food.component";
import { Fruit } from "./components/content/fruit";
import { Furniture } from "./components/fields/furniture.component";
import { Grain } from "./components/content/grain";
import { Greenness } from "./components/content/greenness";
import { Insects } from "./components/content/insects";
import { Mammals } from "./components/content/mammals";
import { Materials } from "./components/fields/materials.component";
import { Nature } from "./components/fields/nature.component";
import { Numbers } from "./components/numbers/numbers";
import { Other } from "./components/content/other";
import { Pronouns } from "./components/pronouns/pronouns";
import { Science } from "./components/fields/science.component";
import { Nouns } from "./components/nouns/nouns";
import { Settings } from "./components/settings/settings.component";
import { Time } from "./components/fields/time.component";
import { Tools } from "./components/fields/tools.component";
import { Trees } from "./components/content/trees";
import { Utensils } from "./components/content/utensils";
import { Vegetables } from "./components/content/vegetables";
import { Verbs } from "./components/verbs/verbs";
import { Vocabulary } from "./components/vocabulary/vocabulary.component";
import { VocabularyParts } from "./components/vocabularyParts/vocabularyParts";
import { VocabularySpeechParts } from "./components/vocabularySpeechParts/vocabularySpeechParts";
import { Weapons } from "./components/fields/weapons.component";
import { WordSelected } from "./components/wordSelected/wordSelected";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AdjectivesName = "Прилагательные";
const AdverbsName = "Наречия";
const AnimalsName = "Животные";
const BerriesName = "Ягоды";
const BirdsName = "Птицы";
const BodyPartsName = "Части тела";
const ClothesName = "Одежда";
const CrawlingName = "Ползучие";
const DairyName = "Молочные продукты";
const EventsName = "Явления";
const FoodName = "Еда";
const FruitName = "Фрукты";
const FurnitureName = "Мебель";
const GrainName = "Злаковые";
const GreennessName = "Растительность";
const InsectsName = "Насекомые";
const MammalsName = "Млекопитающие";
const MaterialsName = "Материалы";
const NatureName = "Природа";
const NumbersName = "Числительные";
const OtherName = "Другое";
const PronounsName = "Местоимения";
const ScienceName = "Наука";
const SettingsName = "Настройки";
const TimeName = "Время";
const ToolsName = "Инструменты";
const TreesName = "Деревья";
const UtensilsName = "Кухонная утварь"
const VegetablesName = "Овощи"
const VerbsName = "Глаголы";
const VocabularyName = "Vocabulary";
const VocabularyComponentName = "Языки";
const VocabularyPartsName = "Разделы"
const VocabularySpeechPartsName = "Части речи"
const VocabularyNounsName = "Существительные";
const WeaponsName = "Оружие"
const WordSelectedName = "Selected Word"

const defaultMode = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(200, 225, 255)",    
    card: "rgb(185, 215, 255)"
  },
};

const darkMode = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "rgb(105, 115, 125)",    
  },
};

export const iconSize = {width: 45, height: 45}
export const arrowSize = {width: 20, height: 20}

export const Context = React.createContext();

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false, headerTitleStyle: {fontFamily: "Palatino"}}} initialRouteName={VocabularyName}>
    <Stack.Screen name={VocabularyComponentName} component={Vocabulary} />
    <Stack.Screen name={VocabularyPartsName} component={VocabularyParts} />
    <Stack.Screen name={VocabularyNounsName} component={Nouns} />
    <Stack.Screen name={VocabularySpeechPartsName} component={VocabularySpeechParts} />
    <Stack.Screen name={AdjectivesName} component={Adjectives} />
    <Stack.Screen name={AdverbsName} component={Adverbs} />
    <Stack.Screen name={AnimalsName} component={Animals} />
    <Stack.Screen name={BirdsName} component={Birds} />
    <Stack.Screen name={BodyPartsName} component={BodyParts} />
    <Stack.Screen name={ClothesName} component={Clothes} />
    <Stack.Screen name={CrawlingName} component={Crawling} />
    <Stack.Screen name={DairyName} component={Dairy} />
    <Stack.Screen name={EventsName} component={Events} />
    <Stack.Screen name={FoodName} component={Food} />
    <Stack.Screen name={FruitName} component={Fruit} />
    <Stack.Screen name={FurnitureName} component={Furniture} />
    <Stack.Screen name={GrainName} component={Grain} />
    <Stack.Screen name={GreennessName} component={Greenness} />
    <Stack.Screen name={InsectsName} component={Insects} />
    <Stack.Screen name={BerriesName} component={Berries} />
    <Stack.Screen name={MammalsName} component={Mammals} />
    <Stack.Screen name={MaterialsName} component={Materials} />
    <Stack.Screen name={NatureName} component={Nature} />
    <Stack.Screen name={NumbersName} component={Numbers} />
    <Stack.Screen name={OtherName} component={Other} />
    <Stack.Screen name={PronounsName} component={Pronouns} />
    <Stack.Screen name={ScienceName} component={Science} />
    <Stack.Screen name={TimeName} component={Time} />
    <Stack.Screen name={ToolsName} component={Tools} />
    <Stack.Screen name={TreesName} component={Trees} />
    <Stack.Screen name={UtensilsName} component={Utensils} />
    <Stack.Screen name={VegetablesName} component={Vegetables} />
    <Stack.Screen name={VerbsName} component={Verbs} />
    <Stack.Screen name={WeaponsName} component={Weapons} />
    <Stack.Screen name={WordSelectedName} component={WordSelected} options={({route}) => ({title: route.params.khadar.charAt(0).toUpperCase() + route.params.khadar.substring(1)})} />
  </Stack.Navigator>
)

const Navigation = () => {
  const [alignment, setAlignment] = useState(false)
  const [dark, setDark] = useState(false);
  const dynamicColor = dark ? COLORS.WHITE : COLORS.VEINY_RED
  const isDarkTheme = dark ? darkMode : defaultMode
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
            <Image source={require("./assets/sections/vocabulary.png")}  style={{width: 30, height: 30}} />
          )}}
           />
          <Tab.Screen name={SettingsName} component={Settings} options={{headerShown: true, tabBarIcon: () => (
            <Image source={require("./assets/sections/settings.png")} style={{width: 30, height: 30}} />
          )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Navigation;
