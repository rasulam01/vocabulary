import { StyleSheet, Platform, Dimensions } from "react-native";

const androidPadding = Platform.OS === "android" ? 20 : 0;
const iosPadding = Platform.OS === "ios" ? 20 : 0
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: androidPadding,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: iosPadding,
    paddingBottom: Platform.OS === "android" ? 20 : 10,        
  },
});
