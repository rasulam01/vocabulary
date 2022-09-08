import React from "react";
import { Word } from "../word/word";
import { FlatList, View } from "react-native";
import { CustomText } from "../custom/CustomText";

export const WordList = ({ data, navigation }) => (
  <>
    <View
      style={[
        { paddingLeft: 17, paddingBottom: 20 },
        Platform.OS === "ios" ? { marginTop: 30, marginLeft: 20 } : "",
      ]}
    >
      <CustomText title={`Слов в категории: ${data.length}`} />
    </View>
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
          length={data.length}
          onPress={() =>
            navigation.navigate("Selected Word", {
              id: item.id,
              src: item.src,
              russian: item.russian,
              khadar: item.khadar,
              english: item.english,
              additional_info: item.additional_info,
              sound_src: item.sound_src,
              length: data.length,
            })
          }
        />
      )}
    />
  </>
);
