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
import { useTranslation } from "react-i18next";
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
const VocabularyPartsName = "Parts"
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



export const StackNavigation = () => {
  const { t } = useTranslation();
  const { language } = React.useContext(Context)  
  const fontByLanguage = language === "ru" ? "Exo2-Regular" : "Bitter-Regular"  
  
  return (
  <Stack.Navigator screenOptions={{gestureEnabled: false, headerTitleStyle: {fontFamily: fontByLanguage}}} initialRouteName={VocabularyComponentName}>
    <Stack.Screen name={VocabularyComponentName} component={Vocabulary} options={{headerTitle: t("languages")}} />
    <Stack.Screen name={t("parts")} component={VocabularyParts} />
    <Stack.Screen name={t("nouns")} component={Nouns} />
    <Stack.Screen name={t("speech_parts")} component={VocabularySpeechParts} />
    <Stack.Screen name={t("adjectives")} component={Adjectives} />
    <Stack.Screen name={t("adverbs")} component={Adverbs} />
    <Stack.Screen name={t("animals")} component={Animals} />
    <Stack.Screen name={t("birds")} component={Birds} />
    <Stack.Screen name={t("body_parts")} component={BodyParts} />
    <Stack.Screen name={t("clothing")} component={Clothes} />
    <Stack.Screen name={t("crawling")} component={Crawling} />
    <Stack.Screen name={t("dairy")} component={Dairy} />
    <Stack.Screen name={t("events")} component={Events} />
    <Stack.Screen name={t("food")} component={Food} />
    <Stack.Screen name={t("fruit")} component={Fruit} />
    <Stack.Screen name={t("furniture")} component={Furniture} />
    <Stack.Screen name={t("grain")} component={Grain} />
    <Stack.Screen name={t("greenness")} component={Greenness} />
    <Stack.Screen name={t("insects")} component={Insects} />
    <Stack.Screen name={t("berries")} component={Berries} />
    <Stack.Screen name={t("mammals")} component={Mammals} />
    <Stack.Screen name={t("materials")} component={Materials} />
    <Stack.Screen name={t("nature")} component={Nature} />
    <Stack.Screen name={t("numbers")} component={Numbers} />
    <Stack.Screen name={t("other")} component={Other} />
    <Stack.Screen name={t("pronouns")} component={Pronouns} />
    <Stack.Screen name={t("science")} component={Science} />
    <Stack.Screen name={t("time")} component={Time} />
    <Stack.Screen name={t("tools")} component={Tools} />
    <Stack.Screen name={t("trees")} component={Trees} />
    <Stack.Screen name={t("utensils")} component={Utensils} />
    <Stack.Screen name={t("vegetables")} component={Vegetables} />
    <Stack.Screen name={t("verbs")} component={Verbs} />
    <Stack.Screen name={t("weapons")} component={Weapons} />
    <Stack.Screen name={WordSelectedName} component={WordSelected} options={({route}) => ({title: route.params.khadar.charAt(0).toUpperCase() + route.params.khadar.substring(1)})} />
  </Stack.Navigator>
  )

}

const Navigation = () => {
  const [alignment, setAlignment] = useState(false)
  const [dark, setDark] = useState(false);
  const dynamicColor = dark ? COLORS.WHITE : COLORS.VEINY_RED
  const isDarkTheme = dark ? darkMode : defaultMode
  const iosPadding = Platform.OS === "ios" ? 20 : 0  
  const [language, setLanguage] = useState("ru")
  const fontByLanguage = language === "ru" ? "Exo2-Regular" : "Bitter-SemiBold"  
  
  const { t } = useTranslation()
  return (
    <Context.Provider value={{dark, setDark, alignment, setAlignment, dynamicColor, iosPadding, language, setLanguage, fontByLanguage }}>
      <NavigationContainer theme={isDarkTheme}>
        <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
        <Tab.Navigator
          initialRouteName={VocabularyName}
          screenOptions={{ headerShown: false, headerTitleStyle: {fontFamily: fontByLanguage},  tabBarActiveBackgroundColor: COLORS.CLOUDY_BLUE, tabBarLabel: () => null, tabBarInactiveBackgroundColor: dark ? COLORS.DARK_GRAY : COLORS.WHITE }}                              
        >
          <Tab.Screen name={VocabularyName} component={StackNavigation}  options={{tabBarIcon: () => (
            <Image source={require("./assets/sections/vocabulary.png")}  style={{width: 30, height: 30}} />
          )}}
           />
          <Tab.Screen name={SettingsName} component={Settings} options={{headerShown: true, title: t("settings"), tabBarIcon: () => (
            <Image source={require("./assets/sections/settings.png")} style={{width: 30, height: 30}} />
          )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Navigation;
