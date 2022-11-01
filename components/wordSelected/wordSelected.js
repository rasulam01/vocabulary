import React from "react";
import { SafeAreaView, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import Sound from "react-native-sound";
import { useTranslation } from "react-i18next";

export const WordSelected = ({ route }) => {
  const { t } = useTranslation()  
  const {    
    index,
    src,
    category,
    russian,
    khadar,
    english,
    additional_info,
    sound_src,
    length,    
  } = route.params;
  // const MIC_PATH = require("../../assets/sections/mic.png");
  // Sound.setCategory("Playback", true);
  // const play = () => {
  //   const audio = new Sound(sound_src, Sound.MAIN_BUNDLE, (err) => {
  //     if (err) {
  //       return;
  //     }
  //     audio.play(() => {
  //       audio.release()
  //     })
  //   });
  // };
  const iconWidth = Dimensions.get("window").width / 2
  const iconHeight = Dimensions.get("window").height / 4
  const iconSelectedSize = {width: iconWidth, height: iconHeight, resizeMode: "contain"}

  return (
    <SafeAreaView style={commonStyles.container}>
      <View
        style={[
          commonStyles.section,
          { justifyContent: "center", alignItems: "flex-end" },
        ]}        
      >
        <CustomText          
          title={khadar}         
          fontSize={20}
        />
        {/* <TouchableOpacity
          onPress={() => {
            play()
          }}
          hitSlop={25}          
        >
          <Image
            source={MIC_PATH}
            style={{ width: 20, height: 20, marginLeft: 5 }}
          />
        </TouchableOpacity> */}
      </View>
      <View style={{alignItems: 'center', paddingBottom: 20}}>
        <Image source={src} style={iconSelectedSize} />
      </View>
      <View
        style={[
          commonStyles.section,
          { flexDirection: "column", alignItems: "flex-start" },
        ]}
      >
        <CustomText title={`${t("word_out_of", {index: index, separator: t("separator"), length: length})}`}  />
        <CustomText title={`${t("selected_category", {category: category})}`}  />
        <CustomText title={`${t("in_russian")}: ${russian}`} />
        <CustomText title={`${t("in_english")}: ${english}`} />
      </View>
      <View
        style={[
          commonStyles.section,
          { flexDirection: "column", alignItems: "flex-start" },
        ]}
      >
        <CustomText title={additional_info} />
      </View>
    </SafeAreaView>
  );
};
