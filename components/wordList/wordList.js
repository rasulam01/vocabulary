import React, { useState } from "react";
import { Word } from "../word/word";
import { FlatList, View, TextInput } from "react-native";
import { CustomText } from "../custom/CustomText";
import { Context } from "../../navigation";

export const WordList = ({ data, navigation }) => {
  const { dynamicColor } = React.useContext(Context);
  const [searchWord, setSearchWord] = useState("");

  const filteredBySearch = data.filter(
    (item) =>
      item.russian.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.khadar.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.english.toLowerCase().includes(searchWord.toLowerCase())
  );
  console.log(filteredBySearch);

  return (
    <>
      <View
        style={[
          { paddingBottom: 20 },
          Platform.OS === "ios"
            ? { marginTop: 30, marginLeft: 20, paddingLeft: 17 }
            : "",
        ]}
      >
        <TextInput
          placeholder="Найти слово"
          value={searchWord}
          onChangeText={setSearchWord}
        />
        <CustomText
          title={`Слов в категории: ${data.length}`}
          color={dynamicColor}
        />
      </View>
      
      <FlatList
        data={data.sort((firstByAlphabet, secondByAlphabet) =>
          firstByAlphabet.khadar.localeCompare(secondByAlphabet.khadar)
        )}
        keyExtractor={(item) => item.src}
        renderItem={({ item, index }) => (
          <Word
            id={item.id}
            index={index + 1}
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
                index: index + 1,
                src: item.src,
                category: item.category,
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
};
