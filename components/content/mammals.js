import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { mammalsData } from "../contentData/mammalsData";
import { WordList } from "../wordList/wordList";

export const Mammals = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={mammalsData} navigation={navigation} />
    </SafeAreaView>
  );
};