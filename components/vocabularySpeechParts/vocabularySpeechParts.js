import React from "react";
import { SafeAreaView } from 'react-native'
import { speechPartsList } from "../listData/speechPartsList";
import commonStyles from "../commonStyles";
import { VocabularyList } from "../vocabularyList/vocabularyList";

export const VocabularySpeechParts = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <VocabularyList data={speechPartsList} navigation={navigation} />
        </SafeAreaView>
    )
}