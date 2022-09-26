import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { adjectivesData } from "./adjectivesData";
import commonStyles from "../commonStyles";

export const Adjectives = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={adjectivesData} navigation={navigation} />
        </SafeAreaView>
    )
}