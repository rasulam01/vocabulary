import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { Context } from '../../navigation';
import { COLORS } from '../../colors';
import { CustomText } from '../custom/CustomText';
import commonStyles from '../commonStyles';

export const Settings = () => {
    const { dynamicColor, dark, setDark, iosPadding, alignment, setAlignment } = React.useContext(Context)
    const setDarkness = () => {
        setDark(!dark)
    }
    const changeAlignment = () => {
        setAlignment(!alignment)
    }
    const darkModeText = dark ? 'Disable Dark Mode' : 'Enable Dark Mode'
    const alignmentText = alignment ? 'Align vocabulary text by center' : 'Align vocabulary text by left side'
    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={[styles.section, { padding: iosPadding }]}>
                <CustomText color={dynamicColor} title={darkModeText} />
                <Switch value={dark} onValueChange={setDarkness} trackColor={{false: COLORS.VEINY_RED, true: COLORS.BEACH_TURQUOISE}} />
            </View>  
            <View style={[styles.section, { padding: iosPadding }]}>
                <CustomText color={dynamicColor} title={alignmentText} />
                <Switch value={alignment} onValueChange={changeAlignment} trackColor={{false: COLORS.VEINY_RED, true: COLORS.BEACH_TURQUOISE}} />
            </View>           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    }
})