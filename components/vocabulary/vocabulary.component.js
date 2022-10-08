import React from "react";
import { SafeAreaView } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import commonStyles from "../commonStyles";
import { useTranslation } from "react-i18next";



export const Vocabulary = ({ navigation }) => {  
  const { t } = useTranslation()
  console.log(t("parts"))
  return (
    <SafeAreaView style={commonStyles.container}>
       <VocabularySection imageSource={require('../../assets/sections/mountain.png')} title={t("khadar_language")} onPress={() => navigation.navigate({name: t("parts")})} />
    </SafeAreaView>
  );
};