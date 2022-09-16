import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Context } from "../../navigation";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { iconSize } from "../../navigation";

export const Word = ({ id, index, src, russian, khadar, english, onPress }) => {
  const { dynamicColor, alignment } = React.useContext(Context);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={commonStyles.section}>
        <View style={{ flex: 1 }}>
          <CustomText title={index + "."} color={dynamicColor} />
        </View>
        <View style={{ flex: 1 }}>
          <Image source={src} style={[iconSize, {width: 32, height: 32, resizeMode: "contain"}]}  />
        </View>
        
        <View style={{ flex: 2.25, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText fontWeight="700" title={khadar} color={dynamicColor} width="90%" textAlign={alignment ? "center" : "left"}   />
        </View>
        <View style={{ flex: 2, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={russian} color={dynamicColor} width="90%" textAlign={alignment ? "center" : "left"} />
        </View>
        <View style={{ flex: 2, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={english} color={dynamicColor} width="90%" textAlign={alignment ? "center" : "left"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
