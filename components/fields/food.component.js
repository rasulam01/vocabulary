import React from "react";
import { SafeAreaView } from "react-native";
import { VocabularySection } from "../vocabularySection/vocabularySection.component";
import commonStyles from "../commonStyles";

export const Food = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <VocabularySection imageSource={require("../../assets/sections/food_fruit.png")} title="Фрукты" onPress={() => navigation.navigate("Fruit")} />
            <VocabularySection imageSource={require("../../assets/sections/food_vegetable.png")} title="Овощи" onPress={() => navigation.navigate("Vegetables")} />
        </SafeAreaView>
    )
}
