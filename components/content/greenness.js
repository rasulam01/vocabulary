import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { greennessData } from "../contentData/greennessData";
import { WordList } from "../wordList/wordList";

export const Greenness = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={greennessData} navigation={navigation} />
    </SafeAreaView>
  );
};