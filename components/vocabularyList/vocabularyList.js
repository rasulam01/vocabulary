import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";


export const VocabularyList = ({ data, navigation }) => {
  const { t } = useTranslation()
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.src}
      initialNumToRender={10}
      renderItem={({ item }) => (
        <VocabularySection
          imageSource={item.src}
          title={t(item.title)}
          onPress={() => navigation.navigate({ name: t(item.title) })}
        />
      )}
    />
  );
};
