import React from "react";
import { SafeAreaView } from "react-native";
import commonStyles from "../commonStyles";
import { rulesData } from "../listData/rulesList";
import { VocabularyList } from "../vocabularyList/vocabularyList";

export const Rules = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <VocabularyList data={rulesData} navigation={navigation} />
    </SafeAreaView>
  );
};
