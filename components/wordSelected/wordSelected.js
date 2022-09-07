import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { Context } from "../../navigation";
import Sound from "react-native-sound";


export const WordSelected = ({ route }) => {
  const [sound, setSound] = useState(null)
  const { dynamicColor } = React.useContext(Context);
  const {
    src,
    russian,
    khadar,
    english,
    additional_info,
    sound_src,
  } = route.params;
  const MIC_PATH = require("../../assets/sections/mic.png");
  const play = () => {
      const audio = new Sound('apple.m4a', Sound.MAIN_BUNDLE, (err) => {
          if (err) {
              console.log(err)
              return
          }
          audio.play((res) => {
              console.log(res)
              audio.release()
          })
      })
      setSound(audio)
  }

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
        <TouchableOpacity onPress={() => {play()}}>
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
