import React from "react";
import { Text } from 'react-native'
import { Context } from "../../navigation";

export const CustomText = ({ color, title, fontSize = 14, fontFamily, fontWeight, flex, width, textAlign }) => {
const { fontByLanguage, dynamicColor } = React.useContext(Context)
    return (
        <Text style={{color: dynamicColor || color, fontSize: fontSize, fontFamily: fontByLanguage || fontFamily, fontWeight: fontWeight, flex: flex, width: width, textAlign: textAlign }}>{title}</Text>
    )    
}