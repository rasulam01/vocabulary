import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { timeData } from "../contentData/timeData";
import commonStyles from "../commonStyles";

export const Time = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={timeData} navigation={navigation} />
        </SafeAreaView>
    )
}