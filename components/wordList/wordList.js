import React, { useState } from "react";
import { Word } from "../word/word";
import { FlatList, View, TextInput } from "react-native";
import { CustomText } from "../custom/CustomText";
import { Context } from "../../navigation";
import { COLORS } from "../../colors";
import { useTranslation } from "react-i18next";

export const WordList = ({ data, navigation }) => {  
  const { dynamicColor } = React.useContext(Context)
  const [searchWord, setSearchWord] = useState("");
  const { t } = useTranslation();

  const filteredBySearch = data.filter(
    (item) =>
      item.russian.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.khadar.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.english.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <>
      <View
        style={[
          { paddingBottom: 5 },
          Platform.OS === "ios"
            ? { marginTop: 25, paddingLeft: 17 }
            : "",
        ]}
      >
        <TextInput
          placeholder={t("placeholder")}
          placeholderTextColor={dynamicColor}
          value={searchWord}
          onChangeText={setSearchWord}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.DARK_GRAY,
            marginBottom: 20,
            width: "90%"
          }}
        />
        {searchWord && !filteredBySearch.length ? (
          <View>
            <CustomText
              title={t("no_match")}              
              fontWeight="700"
              textAlign="center"
            />
          </View>
        ) : (
          <CustomText
            title={`${
              searchWord
                ? t("matches_found", {
                    searchQuery: searchWord.toLowerCase(),
                    filteredQueryLength: filteredBySearch.length,
                  })
                : t("words_in_category", { listLength: data.length })
            }`}            
          />
        )}
      </View>
      {searchWord ? (
        <FlatList
          data={filteredBySearch.sort((firstByAlphabet, secondByAlphabet) =>
            firstByAlphabet.khadar.localeCompare(secondByAlphabet.khadar)
          )}
          keyExtractor={(item) => item.khadar}
          renderItem={({ item, index }) => (
            <Word              
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
                  index: index + 1,
                  src: item.src,
                  category: t(item.category),
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
      ) : (
        <FlatList
          data={data.sort((firstByAlphabet, secondByAlphabet) =>
            firstByAlphabet.khadar.localeCompare(secondByAlphabet.khadar)
          )}
          keyExtractor={(item) => item.khadar}
          initialNumToRender={10}
          renderItem={({ item, index }) => (
            <Word              
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
                  index: index + 1,
                  src: item.src,
                  category: t(item.category),
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
      )}
    </>
  );
};
