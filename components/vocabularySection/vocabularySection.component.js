import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { CustomText } from "../custom/CustomText";
import { iconSize } from "../../navigation";
import { arrowSize } from "../../navigation";
import commonStyles from "../commonStyles";


const ARROW_PATH = require("../../assets/sections/arrow.png")


export const VocabularySection = ({ imageSource, title, onPress }) => {
  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={commonStyles.section}>
        <View style={styles.sectionPiece}>
          <Image
            source={imageSource}
            style={[iconSize, { marginRight: 20, resizeMode: "contain" }]}
          />
          <CustomText title={title} />
        </View>
        <View>
          <Image source={ARROW_PATH} style={arrowSize} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 20 : 10,
  },
  sectionPiece: {
    flexDirection: "row",
    alignItems: "center",
  },
});
