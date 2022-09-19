import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { weaponsData } from "../contentData/weaponsData";
import commonStyles from "../commonStyles";

export const Weapons = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={weaponsData} navigation={navigation} />
        </SafeAreaView>
    )
}