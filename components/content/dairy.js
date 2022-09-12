import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { dairyData } from "../contentData/dairyData";
import { WordList } from "../wordList/wordList";

export const Dairy = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={dairyData} navigation={navigation} />
    </SafeAreaView>
  );
};