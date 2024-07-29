import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Linking, StyleSheet } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import DetailCard from "../../components/detailCard/detailCard";
import styles from "./detailMeal.stil"

const DetailMeal = ({ route }) => {
    const id = route.params;
    const { data: { meals }, loading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

    const openLink = () => {
        Linking.openURL(meals[0].strYoutube);
    };

    if (loading) {
        return <ActivityIndicator size={"large"} color="#f8b400" />;
    } else if (error) {
        return <Text style={styles.errorText}>{error}</Text>;
    }

    return (
        <View style={styles.container}>
            <DetailCard 
                imageURL={meals[0].strMealThumb} 
                title={meals[0].strMeal} 
                desc={meals[0].strInstructions} 
            />
            <TouchableOpacity style={styles.button} onPress={openLink}>
                <Text style={styles.buttonText}>Watch on YouTube</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailMeal;
