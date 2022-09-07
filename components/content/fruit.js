import React from "react";
import { SafeAreaView, View } from "react-native";
import commonStyles from "../commonStyles";
import { fruitData } from "../contentData/fruitData";
import { CustomText } from "../custom/CustomText";
import { WordList } from "../wordList/wordList";

export const Fruit = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={{ paddingLeft: 20, paddingBottom: 20 }}>
        <CustomText title={`Слов в категории: ${fruitData.length}`} />
      </View>
      <WordList data={fruitData} navigation={navigation} />
    </SafeAreaView>
  );
};
