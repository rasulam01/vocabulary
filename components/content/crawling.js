import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { crawlingData } from "../contentData/crawlingData";
import { WordList } from "../wordList/wordList";

export const Crawling = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={crawlingData} navigation={navigation} />
    </SafeAreaView>
  );
};