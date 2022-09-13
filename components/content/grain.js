import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { grainData } from "../contentData/grainData";
import { WordList } from "../wordList/wordList";

export const Grain = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={grainData} navigation={navigation} />
    </SafeAreaView>
  );
};
