import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { Context } from '../../navigation';
import { COLORS } from '../../colors';
import { CustomText } from '../custom/CustomText';
import commonStyles from '../commonStyles';

export const Settings = () => {
    const { dynamicColor, dark, setDark, iosPadding } = React.useContext(Context)
    const setDarkness = () => {
        setDark(!dark)
    }
    const darkModeText = dark ? 'Disable Dark Mode' : 'Enable Dark Mode'
    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={[styles.section, { padding: iosPadding }]}>
                <CustomText color={dynamicColor} title={darkModeText} />
                <Switch value={dark} onValueChange={setDarkness} trackColor={{false: COLORS.VEINY_RED, true: COLORS.BEACH_TURQUOISE}} />
            </View>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})