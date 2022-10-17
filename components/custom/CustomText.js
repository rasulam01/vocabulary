import React from "react";
import { Text } from 'react-native'
import { Context } from "../../navigation";

export const CustomText = ({ color, title, fontSize = 15, fontFamily, fontWeight, flex, width, textAlign }) => {
const { fontByLanguage } = React.useContext(Context)
    return (
        <Text style={{color: color, fontSize: fontSize, fontFamily: fontByLanguage || fontFamily, fontWeight: fontWeight, flex: flex, width: width, textAlign: textAlign }}>{title}</Text>
    )    
}