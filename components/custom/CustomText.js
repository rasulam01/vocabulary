import React from "react";
import { Text } from 'react-native'

export const CustomText = ({ color, title, fontSize, fontFamily, fontWeight, flex, textAlign  }) => (
    <Text style={{color: color, fontSize: fontSize, fontFamily: fontFamily, fontWeight: fontWeight, flex: flex, textAlign: textAlign }}>{title}</Text>
)