import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { vegetablesData } from "../contentData/vegetablesData";
import { WordList } from "../wordList/wordList";

export const Vegetables = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={vegetablesData} navigation={navigation} />
    </SafeAreaView>
  );
};