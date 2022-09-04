import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection";

export const Vocabulary = () => {  
  return (
    <SafeAreaView style={styles.container}>
       <VocabularySection imageSource={require('../../assets/mountain.png')}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,           
  },
  sectionPiece: {
    flexDirection: "row",
    alignItems: "center",
  }
});
