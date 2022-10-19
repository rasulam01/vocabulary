import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Context } from "../../navigation";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";

export const Word = ({ index, russian, khadar, english, onPress }) => {
  const { alignment } = React.useContext(Context);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={commonStyles.section}>
        <View style={{ flex: 1 }}>
          <CustomText title={index + "."} />
        </View>      
        <View style={{ flex: 3, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={khadar}   width="90%" textAlign={alignment ? "center" : "left"}   />
        </View>
        <View style={{ flex: 3, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={russian}   width="90%" textAlign={alignment ? "center" : "left"} />
        </View>
        <View style={{ flex: 3, alignItems: alignment ? "center" : "flex-start" }}>
          <CustomText title={english}   width="90%" textAlign={alignment ? "center" : "left"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
