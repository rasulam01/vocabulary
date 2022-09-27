import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { numbersData } from "./numbersData";
import commonStyles from "../commonStyles";

export const Numbers = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>            
            <WordList data={numbersData} navigation={navigation} />
        </SafeAreaView>
    )
}