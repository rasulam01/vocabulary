import React from "react";
import { Text, Platform } from 'react-native'

const customFont = Platform.OS === "ios" ? "Palatino" : "serif"

export const CustomText = ({ color, title, fontSize, fontFamily = customFont, fontWeight, flex, width, textAlign }) => (
    <Text style={{color: color, fontSize: fontSize, fontFamily: fontFamily, fontWeight: fontWeight, flex: flex, width: width, textAlign: textAlign }}>{title}</Text>
)