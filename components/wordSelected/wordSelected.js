import React from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { Context } from "../../navigation";
import Sound from "react-native-sound";

export const WordSelected = ({ route }) => {
  const { dynamicColor } = React.useContext(Context);
  const {
    id,
    index,
    src,
    russian,
    khadar,
    english,
    additional_info,
    sound_src,
    length
  } = route.params;
  const MIC_PATH = require("../../assets/sections/mic.png");
  Sound.setCategory("Playback", true);
  const play = () => {
    const audio = new Sound(sound_src, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log("error: ", err);
        return;
      } else {
        audio.play((res) => {
          console.log("result: ", res);
        })
      }
    });
  };

  

  return (
    <SafeAreaView style={commonStyles.container}>
      <View
        style={[
          commonStyles.section,
          { justifyContent: "center", alignItems: "flex-end" },
        ]}
      >
        
        <CustomText
          color={dynamicColor}
          title={khadar}
          fontWeight="700"
          fontSize={20}
        />
        <TouchableOpacity
          onPress={() => {
            play()
          }}
        >
          <Image
            source={MIC_PATH}
            style={{ width: 20, height: 20, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          commonStyles.section,
          { flexDirection: "column", alignItems: "flex-start" },
        ]}
      >
        <CustomText color={dynamicColor} title={`Слово ${index + 1} / ${length}`} fontWeight="700"/>
        <CustomText color={dynamicColor} title={`На русском: ${russian}`} />
        <CustomText color={dynamicColor} title={`На английском: ${english}`} />
      </View>
      <View
        style={[
          commonStyles.section,
          { flexDirection: "column", alignItems: "flex-start" },
        ]}
      >
        <CustomText color={dynamicColor} title={additional_info} />
      </View>
    </SafeAreaView>
  );
};
