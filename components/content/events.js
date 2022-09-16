import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { eventsData } from "../contentData/eventsData";
import { WordList } from "../wordList/wordList";

export const Events = ({ navigation }) => {
  
  return (
    <SafeAreaView style={commonStyles.container}>
      <WordList data={eventsData} navigation={navigation} />
    </SafeAreaView>
  );
};