import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Switch } from 'react-native';
import { Context } from '../../navigation';
import { COLORS } from '../../colors';
import { CustomText } from '../custom/CustomText';


export const Settings = ({ navigation }) => {
    const { dynamicColor, dark, setDark } = React.useContext(Context)
    const setDarkness = () => {
        setDark(!dark)
    }
    const darkModeText = dark ? 'Disable Dark Mode' : 'Enable Dark Mode'
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <CustomText color={dynamicColor} title={darkModeText} />
                <Switch value={dark} onValueChange={setDarkness} trackColor={{false: COLORS.VEINY_RED, true: COLORS.BEACH_TURQUOISE}} />
            </View>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})