import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { otherData } from "../contentData/otherData";
import { WordList } from "../wordList/wordList";

export const Other = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={otherData} navigation={navigation} />
    </SafeAreaView>
  );
};