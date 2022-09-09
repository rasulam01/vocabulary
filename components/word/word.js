import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Context } from "../../navigation";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { iconSize } from "../../navigation";

export const Word = ({ id, index, src, russian, khadar, english, onPress }) => {
  const { dynamicColor } = React.useContext(Context);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[commonStyles.section, {justifyContent: 'space-around'}]}>
        <CustomText title={index + 1 + '.'} color={dynamicColor} />
        <Image source={src} style={iconSize} />
        <CustomText fontWeight="700" title={khadar} color={dynamicColor} />
        <CustomText title={russian} color={dynamicColor} />
        <CustomText title={english} color={dynamicColor} />
      </View>
    </TouchableOpacity>
  );
};

