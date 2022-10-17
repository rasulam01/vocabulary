import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Context } from "../../navigation";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";

export const Word = ({ index, russian, khadar, english, onPress }) => {
  const { dynamicColor, alignment } = React.useContext(Context);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={commonStyles.section}>
        <View style={{ flex: 1 }}>
          <CustomText title={index + "."} color={dynamicColor} />
        </View>      
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
