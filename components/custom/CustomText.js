import React from "react";
import { Text } from 'react-native'

export const CustomText = ({ color, title, fontSize, fontFamily, fontWeight }) => (
    <Text style={{color: color, fontSize: fontSize, fontFamily: fontFamily, fontWeight: fontWeight}}>{title}</Text>
)