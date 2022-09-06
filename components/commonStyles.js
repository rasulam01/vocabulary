import { StyleSheet, Platform } from "react-native";

const androidPadding = Platform.OS === "android" ? 20 : 0
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: androidPadding
    }
})