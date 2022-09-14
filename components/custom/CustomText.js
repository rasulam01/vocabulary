import React from "react";
import { Text } from 'react-native'

export const CustomText = ({ color, title, fontSize, fontFamily, fontWeight, flex, width }) => (
    <Text style={{color: color, fontSize: fontSize, fontFamily: fontFamily, fontWeight: fontWeight, flex: flex, width: width }}>{title}</Text>
)