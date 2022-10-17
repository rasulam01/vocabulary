import React, {useState} from "react";
import {
  SafeAreaView,
  View,  
  StyleSheet,
  Switch,  
} from "react-native";
import { Context } from "../../navigation";
import { COLORS } from "../../colors";
import { CustomText } from "../custom/CustomText";
import commonStyles from "../commonStyles";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-native-element-dropdown";

export const Settings = () => {
  const {
    dynamicColor,
    dark,
    setDark,
    iosPadding,
    alignment,
    setAlignment,     
    setLanguage,
    fontByLanguage
  } = React.useContext(Context);
  const setDarkness = () => {
    setDark(!dark);
  };
  const changeAlignment = () => {
    setAlignment(!alignment);
  };
  
  const options = [{
    label: "English", value: "en"
  }, {
    label: "Русский", value: "ru"
  }]

  const { t, i18n } = useTranslation()
  const [value, setValue] = useState("ru")
  const alignmentText = alignment
    ? t("align_by_center")
    : t("align_by_left");
  const darkModeText = dark ? t("disable_dark_mode") : t("enable_dark_mode");
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={[styles.section, { padding: iosPadding }]}>
        <CustomText color={dynamicColor} title={darkModeText} />
        <Switch
          value={dark}
          onValueChange={setDarkness}
          trackColor={{ false: COLORS.VEINY_RED, true: COLORS.BEACH_TURQUOISE }}
        />
      </View>
      <View style={[styles.section, { padding: iosPadding }]}>
        <CustomText color={dynamicColor} title={alignmentText} />
        <Switch
          value={alignment}
          onValueChange={changeAlignment}
          trackColor={{ false: COLORS.VEINY_RED, true: COLORS.BEACH_TURQUOISE }}
        />
      </View>
      <View>
        <View>
          <CustomText color={dynamicColor} title={t('language')} />
        </View>        
        <Dropdown data={options} fontFamily={fontByLanguage} selectedTextStyle={{color: dynamicColor}} itemTextStyle={{color: dynamicColor}} labelField="label" valueField="value" placeholder="Select language" value={value} onChange={item => {setValue(item.value), setLanguage(item.value), i18n.changeLanguage(item.value)}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
});
