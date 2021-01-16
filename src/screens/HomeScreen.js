import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";
import { Header, CardOne, Footer } from '../widgets';

import { restaurantData, categoryData, initialCurrentLocation } from '../Data';


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Galaxy Green City" isHomeScreen />

            <CardOne restaurantData={restaurantData} navigation={navigation} />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        marginTop: 20,
        marginBottom: 100
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})
export default HomeScreen;
