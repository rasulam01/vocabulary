import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { CustomText } from '../custom/CustomText';
import { Context } from '../../navigation';
import commonStyles from '../commonStyles';

export const Menu = () => {
    const { dynamicColor } = React.useContext(Context)
    return (
        <SafeAreaView style={commonStyles.container}>
            <CustomText color={dynamicColor} title="Menu" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})