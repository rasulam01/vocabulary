import React from "react";
import { Word } from "../word/word";
import { FlatList } from "react-native";

export const WordList = ({ data, navigation }) =>(
    <FlatList
      data={data.sort((a, b) => a.khadar.localeCompare(b.khadar))}
      keyExtractor={(item) => item.src}
      renderItem={({ item }) => (
        <Word
          id={item.id}
          src={item.src}
          russian={item.russian}
          khadar={item.khadar}
          english={item.english}
          additional_info={item.additional_info}
          sound_src={item.sound_src}
          navigation={navigation}
          onPress={() =>
            navigation.navigate(
              "Selected Word",
              {
                id: item.id,
                src: item.src,
                russian: item.russian,
                khadar: item.khadar,
                english: item.english,
                additional_info: item.additional_info,
                sound_src: item.sound_src,
              },              
            )
          }
        />
      )}
    />
)