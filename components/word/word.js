import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Context } from "../../navigation";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { iconSize } from "../../navigation";

export const Word = ({ src, russian, khadar, english, onPress, additional_info, sound_src, navigation }) => {
  const { dynamicColor } = React.useContext(Context);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={commonStyles.section}>
        <Image source={src} style={iconSize} />
        <CustomText title={khadar} color={dynamicColor} />
        <CustomText title={russian} color={dynamicColor} />
        <CustomText title={english} color={dynamicColor} />
      </View>
    </TouchableOpacity>
  );
};

