import React from "react";
import { SafeAreaView } from "react-native";
import { VocabularyList } from "../vocabularyList/vocabularyList";
import { animalsList } from "../listData/animalsList";
import commonStyles from "../commonStyles";

export const Animals = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <VocabularyList data={animalsList} navigation={navigation} />
        </SafeAreaView>
    )
}