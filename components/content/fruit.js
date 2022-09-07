import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import commonStyles from "../commonStyles";
import { fruitData } from "../contentData/fruitData";
import { Word } from "../word/word";

export const Fruit = ({ navigation }) => {
  const fruit = (
    <FlatList
      data={fruitData}
      keyExtractor={(item) => item.src}
      renderItem={({ item }) => (
        <Word
          src={item.src}
          russian={item.russian}
          khadar={item.khadar}
          english={item.english}
          additional_info={item.additional_info}
          sound_src={item.sound_src}
          navigation={navigation}
          onPress={() => 
            navigation.navigate("Selected Word", {
              src: item.src,
              russian: item.russian,
              khadar: item.khadar,
              english: item.english,
              additional_info: item.additional_info,
              sound_src: item.sound_src,
            }, console.log(item))
          }
        />
      )}
    />
  );
  return <SafeAreaView style={commonStyles.container}>{fruit}</SafeAreaView>;
};
