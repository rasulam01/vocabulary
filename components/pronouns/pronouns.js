import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { pronounsData } from "./pronounsData";
import commonStyles from "../commonStyles";

export const Pronouns = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={pronounsData} navigation={navigation} />
        </SafeAreaView>
    )
}