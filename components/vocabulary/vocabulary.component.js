import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import { Context } from "../../navigation";


export const Vocabulary = ({ navigation }) => {  
  const { androidPadding } = React.useContext(Context)
  return (
    <SafeAreaView style={[styles.container, {padding: androidPadding}]}>
       <VocabularySection imageSource={require('../../assets/mountain.png')} title="Кадарский язык" onPress={() => navigation.navigate('Subsections')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
