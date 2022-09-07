import React from 'react';
import { SafeAreaView } from 'react-native';
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
