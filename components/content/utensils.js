import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { utensilsData } from "../contentData/utensilsData";
import { WordList } from "../wordList/wordList";

export const Utensils = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={utensilsData} navigation={navigation} />
    </SafeAreaView>
  );
};