import { SafeAreaView, ScrollView, Platform } from "react-native";
import React from "react";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { useTranslation } from "react-i18next";

export const Alphabet = () => {
    const { t } = useTranslation()
    return (
    <SafeAreaView style={[commonStyles.container, {margin: 20}]}>
        <ScrollView>
            <CustomText title={t("alphabet_text")} />
        </ScrollView>        
    </SafeAreaView>
    )

}
