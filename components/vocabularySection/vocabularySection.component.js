import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { CustomText } from "../custom/CustomText";
import { Context } from "../../navigation";
import { iconSize } from "../../navigation";
import { arrowSize } from "../../navigation";

export const VocabularySection = ({ imageSource, title, onPress }) => {
  const { dynamicColor, iosPadding } = React.useContext(Context);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.section, {padding: iosPadding}]}>
        <View style={styles.sectionPiece}>
          <Image
            source={imageSource}
            style={[iconSize, { marginRight: 20, borderColor: dynamicColor }]}
          />
          <CustomText color={dynamicColor} title={title} />
        </View>
        <View>
          <Image source={require("../../assets/sections/arrow.png")} style={arrowSize} />
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
