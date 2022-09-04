import React from "react";
import { Text } from 'react-native'

export const CustomText = ({ color, title }) => (
    <Text style={{color: color}}>{title}</Text>
)