import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { useTranslation } from "react-i18next";

export const Passive = () => {
    const { t } = useTranslation()
    return (
    <SafeAreaView style={commonStyles.marginContainer}>
        <ScrollView>
            <CustomText title={t("passive_text")} />
        </ScrollView>        
    </SafeAreaView>
    )
}