import React from "react";
import { FlatList } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";

export const VocabularyList = ({data, navigation}) => (
    <FlatList
    data={data}
    keyExtractor={(item) => item.src}
    renderItem={({ item }) => (
      <VocabularySection imageSource={item.src} title={item.title} onPress={() => navigation.navigate({name: item.navigateTo})} />
    )}
  />
)