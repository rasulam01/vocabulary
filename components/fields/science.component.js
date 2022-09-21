import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { scienceData } from "../contentData/scienceData";
import commonStyles from "../commonStyles";

export const Science = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={scienceData} navigation={navigation} />
        </SafeAreaView>
    )
}