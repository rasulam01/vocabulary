import React from "react";
import { SafeAreaView } from "react-native";
import { sectionsList } from "../listData/sectionsList";
import commonStyles from "../commonStyles";
import { VocabularyList } from "../vocabularyList/vocabularyList";

export const Subsections = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>      
      <VocabularyList data={sectionsList} navigation={navigation} />
    </SafeAreaView>
  );
};

