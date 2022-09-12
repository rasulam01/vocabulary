import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { berriesData } from "../contentData/berriesData";
import { WordList } from "../wordList/wordList";

export const Berries = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={berriesData} navigation={navigation} />
    </SafeAreaView>
  );
};