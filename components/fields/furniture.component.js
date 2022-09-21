import React from "react";
import { SafeAreaView } from "react-native";
import { WordList } from "../wordList/wordList";
import { furnitureData } from "../contentData/furnitureData";
import commonStyles from "../commonStyles";

export const Furniture = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <WordList data={furnitureData} navigation={navigation} />
        </SafeAreaView>
    )
}
