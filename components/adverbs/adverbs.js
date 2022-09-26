import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { adverbsData } from "./adverbsData";
import commonStyles from "../commonStyles";

export const Adverbs = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={adverbsData} navigation={navigation} />
        </SafeAreaView>
    )
}