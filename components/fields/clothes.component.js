import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { clothesData } from "../contentData/clothesData";
import commonStyles from "../commonStyles";

export const Clothes = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={clothesData} navigation={navigation} />
        </SafeAreaView>
    )
}