import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { materialsData } from "../contentData/materialsData";
import commonStyles from "../commonStyles";

export const Materials = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={materialsData} navigation={navigation} />
        </SafeAreaView>
    )
}