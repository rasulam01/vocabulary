import React from "react";
import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native'
import { Context } from "../../navigation";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import { speechPartsList } from "../listData/speechPartsList";
import commonStyles from "../commonStyles";

export const VocabularySpeechParts = ({ navigation }) => {
    const { androidPadding } = React.useContext(Context)
    const speechParts = <FlatList data={speechPartsList} keyExtractor={item => item.src} renderItem={({ item }) => (
        <VocabularySection imageSource={item.src} title={item.title} onPress={() => navigation.navigate({name: item.navigateTo})} />
      )} />
    return (
        <SafeAreaView style={commonStyles.container}>
            {speechParts}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})