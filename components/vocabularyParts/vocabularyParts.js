import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { VocabularySection } from '../vocabularySection/vocabularySection.component'
import { partsList } from '../listData/partsList'
import commonStyles from '../commonStyles'

export const VocabularyParts = ({ navigation }) => {
    const parts = <FlatList data={partsList} keyExtractor={item => item.src} renderItem={({ item }) => (
        <VocabularySection imageSource={item.src} title={item.title} onPress={() => navigation.navigate({name: item.navigateTo})} />
      )} />
    return (
        <SafeAreaView style={commonStyles.container}>
            {parts}
        </SafeAreaView>
    )
}