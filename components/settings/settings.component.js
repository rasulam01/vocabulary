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
  } = React.useContext(Context);
  const setDarkness = () => {
    setDark(!dark);
  };
  const changeAlignment = () => {
    setAlignment(!alignment);
  };
  const darkModeText = dark ? "Disable Dark Mode" : "Enable Dark Mode";
  const alignmentText = alignment
    ? "Align vocabulary text by center"
    : "Align vocabulary text by left side";

  const options = [{
    label: "English", value: "en"
  }, {
    label: "Русский", value: "ru"
  }]

  const { t, i18n } = useTranslation()
  const [value, setValue] = useState("ru")

  
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
      <View style={{paddingBottom: 10}}>
        <View style={{paddingBottom: 10}}>
          <CustomText color={dynamicColor} title={t('language')} />
        </View>        
        <Dropdown data={options} fontFamily={Platform.OS === "ios" ? "Palatino" : "serif"} labelField="label" valueField="value" placeholder="Select language" value={value} onChange={item => {setValue(item.value), i18n.changeLanguage(item.value)}} />
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
