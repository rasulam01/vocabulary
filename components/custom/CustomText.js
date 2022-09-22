import React from "react";
import { Text } from 'react-native'

export const CustomText = ({ color, title, fontSize, fontFamily = "Palatino", fontWeight, flex, width, textAlign }) => (
    <Text style={{color: color, fontSize: fontSize, fontFamily: fontFamily, fontWeight: fontWeight, flex: flex, width: width, textAlign: textAlign }}>{title}</Text>
)