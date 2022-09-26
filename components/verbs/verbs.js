import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { verbsData } from "./verbsData";
import commonStyles from "../commonStyles";

export const Verbs = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={verbsData} navigation={navigation} />
        </SafeAreaView>
    )
}