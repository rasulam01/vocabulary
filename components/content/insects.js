import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { insectsData } from "../contentData/insectsData";
import { WordList } from "../wordList/wordList";

export const Insects = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={insectsData} navigation={navigation} />
    </SafeAreaView>
  );
};