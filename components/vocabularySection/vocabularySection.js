import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { CustomText } from "../custom/CustomText";
import { Context } from "../../navigation";
import { iconSize } from "../../navigation";

export const VocabularySection = ({ imageSource }) => {
  const { dynamicColor } = React.useContext(Context);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.section}>
        <View style={styles.sectionPiece}>
          <Image
            source={imageSource}
            style={[iconSize, { marginRight: 20, borderColor: dynamicColor }]}
          />
          <CustomText color={dynamicColor} title="Кадарский язык" />
        </View>
        <View>
          <Image source={require("../../assets/arrow.png")} style={iconSize} />
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
    paddingBottom: 10,
  },
  sectionPiece: {
    flexDirection: "row",
    alignItems: "center",
  },
});
