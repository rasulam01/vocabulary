import React from "react";
import { SafeAreaView, View, Platform } from "react-native";
import commonStyles from "../commonStyles";
import { fruitData } from "../contentData/fruitData";
import { CustomText } from "../custom/CustomText";
import { WordList } from "../wordList/wordList";

export const Fruit = ({ route, navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={fruitData} navigation={navigation} />
    </SafeAreaView>
  );
};
