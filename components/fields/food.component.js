import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";

export const Food = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <VocabularySection imageSource={require("../../assets/food_fruit.png")} title="Fruit" onPress={() => navigation.navigate("Fruit")} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})