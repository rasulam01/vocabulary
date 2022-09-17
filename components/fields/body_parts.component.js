import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { bodyPartsData } from "../contentData/bodyPartsData";
import commonStyles from "../commonStyles";

export const BodyParts = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={bodyPartsData} navigation={navigation} />
        </SafeAreaView>
    )
}