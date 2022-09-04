import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { CustomText } from '../custom/CustomText';
import { Context } from '../../navigation';

export const Menu = () => {
    const { dynamicColor } = React.useContext(Context)
    return (
        <SafeAreaView style={styles.container}>
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