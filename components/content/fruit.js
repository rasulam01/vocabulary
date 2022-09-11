import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { fruitData } from "../contentData/fruitData";
import { WordList } from "../wordList/wordList";

export const Fruit = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={fruitData} navigation={navigation} />
    </SafeAreaView>
  );
};
