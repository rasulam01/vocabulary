import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Context } from "../../navigation";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";



export const Word = ({ id, index, src, russian, khadar, english, onPress }) => {
  const { dynamicColor, alignment } = React.useContext(Context);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={commonStyles.section}>
        <View style={{ flex: 1 }}>
          <CustomText title={index + "."} color={dynamicColor} />
        </View>
        {/* <View style={{ flex: 1.5 }}>
          <Image source={src} style={[iconSize, {resizeMode: "contain"}]}  />
        </View> */}        
        <View style={{ flex: 3, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={khadar}  color={dynamicColor} width="90%" textAlign={alignment ? "center" : "left"}   />
        </View>
        <View style={{ flex: 3, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={russian}  color={dynamicColor} width="90%" textAlign={alignment ? "center" : "left"} />
        </View>
        <View style={{ flex: 3, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={english}  color={dynamicColor} width="90%" textAlign={alignment ? "center" : "left"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
