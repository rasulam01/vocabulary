import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { birdsData } from "../contentData/birdsData";
import { WordList } from "../wordList/wordList";

export const Birds = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={birdsData} navigation={navigation} />
    </SafeAreaView>
  );
};