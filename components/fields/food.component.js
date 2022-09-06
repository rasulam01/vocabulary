import React from "react";
import { SafeAreaView } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import commonStyles from "../commonStyles";

export const Food = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <VocabularySection imageSource={require("../../assets/food_fruit.png")} title="Фрукты" onPress={() => navigation.navigate("Fruit")} />
        </SafeAreaView>
    )
}
