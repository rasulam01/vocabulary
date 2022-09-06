import React from "react";
import { SafeAreaView, FlatList } from 'react-native'
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import { speechPartsList } from "../listData/speechPartsList";
import commonStyles from "../commonStyles";

export const VocabularySpeechParts = ({ navigation }) => {
    const speechParts = <FlatList data={speechPartsList} keyExtractor={item => item.src} renderItem={({ item }) => (
        <VocabularySection imageSource={item.src} title={item.title} onPress={() => navigation.navigate({name: item.navigateTo})} />
      )} />
    return (
        <SafeAreaView style={commonStyles.container}>
            {speechParts}
        </SafeAreaView>
    )
}