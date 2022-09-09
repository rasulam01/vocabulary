import React from "react";
import { SafeAreaView } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import commonStyles from "../commonStyles";

export const Vocabulary = ({ navigation }) => {  
  return (
    <SafeAreaView style={commonStyles.container}>
       <VocabularySection imageSource={require('../../assets/sections/mountain.png')} title="Гъадарский язык" onPress={() => navigation.navigate('Parts')} />
    </SafeAreaView>
  );
};