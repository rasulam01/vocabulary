import React from 'react'
import { SafeAreaView } from 'react-native'
import { VocabularyList } from '../vocabularyList/vocabularyList'
import { partsList } from '../listData/partsList'
import commonStyles from '../commonStyles'

export const VocabularyParts = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <VocabularyList data={partsList} navigation={navigation} />
        </SafeAreaView>
    )
}