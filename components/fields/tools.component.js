import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { toolsData } from "../contentData/toolsData";
import commonStyles from "../commonStyles";

export const Tools = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={toolsData} navigation={navigation} />
        </SafeAreaView>
    )
}