import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import { Context } from "../../navigation";

export const Food = ({ navigation }) => {
    const { androidPadding } = React.useContext(Context)
    return (
        <SafeAreaView style={[styles.container, {padding: androidPadding}]}>
            <VocabularySection imageSource={require("../../assets/food_fruit.png")} title="Fruit" onPress={() => navigation.navigate("Fruit")} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})