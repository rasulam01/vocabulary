import React from "react";
import { SafeAreaView } from "react-native";
import { VocabularyList } from "../vocabularyList/vocabularyList";
import { natureList } from "../listData/natureList";
import commonStyles from "../commonStyles";

export const Nature = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <VocabularyList data={natureList} navigation={navigation} />
        </SafeAreaView>
    )
}