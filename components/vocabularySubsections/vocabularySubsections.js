import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { Context } from "../../navigation";
import { VocabularySection } from "../vocabularySection/vocabularySection";

export const Subsections = ({ navigation }) => {
  const { androidPadding } = React.useContext(Context);
  const sectionsList = [
    {
      src: require("../../assets/food.png"),
      title: "Еда",
      navigateTo: "Food",
    },
    {
      src: require("../../assets/animals.png"),
      title: "Животные",
      navigateTo: "Food",
    },
    {
      src: require("../../assets/nature.png"),
      title: "Природа",
      navigateTo: "Food",
    },
    {
      src: require("../../assets/body_part.png"),
      title: "Части тела",
      navigateTo: "Food",
    },
    {
        src: require("../../assets/career.png"),
        title: "Профессии",
        navigateTo: "Food",
    },
  ];
  const sections = (
    <FlatList
      data={sectionsList}
      keyExtractor={(item) => item.src}
      renderItem={({ item }) => (
        <VocabularySection imageSource={item.src} title={item.title}  />
      )}
    />
  );
  return (
    <SafeAreaView style={[styles.container, { padding: androidPadding }]}>
      {sections}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
