import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import { sectionsList } from "../listData/sectionsList";
import commonStyles from "../commonStyles";

export const Subsections = ({ navigation }) => {
  const sections = (
    <FlatList
      data={sectionsList}
      keyExtractor={(item) => item.src}
      renderItem={({ item }) => (
        <VocabularySection imageSource={item.src} title={item.title} onPress={() => navigation.navigate({name: item.navigateTo})} />
      )}
    />
  );
  return (
    <SafeAreaView style={commonStyles.container}>
      {sections}
    </SafeAreaView>
  );
};

