import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { treesData } from "../contentData/treesData";
import { WordList } from "../wordList/wordList";

export const Trees = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={treesData} navigation={navigation} />
    </SafeAreaView>
  );
};