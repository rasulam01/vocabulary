import React from "react";
import { SafeAreaView } from "react-native";
import { VocabularyList } from "../vocabularyList/vocabularyList";
import { foodList } from "../listData/foodList";
import commonStyles from "../commonStyles";

export const Food = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <VocabularyList data={foodList} navigation={navigation} />
        </SafeAreaView>
    )
}
