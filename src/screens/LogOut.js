import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { COLORS, FONTS, images } from "../constants";
import { Header, Footer } from '../widgets';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LogOut = ({ navigation }) => {
    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('@credentials')
            navigation.replace('LogIn2')
        } catch (e) {

        }

    }
    const doLogout = () => {
        removeValue()
    }

    return (<ImageBackground source={images.bg} style={styles.container}>
        <View style={{ marginTop: 20 }}>
            <Header title="Log Out" isHomeScreen navigation={navigation} />
        </View>
        <View style={{ marginVertical: '35%', marginHorizontal: 10, backgroundColor: COLORS.white, borderRadius: 5, borderWidth: 2, borderColor: COLORS.darkgray }}>
            <View style={{ margin: 30, paddingBottom: 20 }}>
                <Text style={{ ...FONTS.body2 }}>Do you really want to Logout</Text>
            </View>
            <TouchableOpacity onPress={() => { doLogout() }}>
                <View style={{
                    ...styles.button,
                    marginTop: 15,
                }}>
                    <Text> Log Out</Text>
                </View>
            </TouchableOpacity>
        </View>
        <Footer />
    </ImageBackground>)
}

export default LogOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkgray,

    },
    button: {
        borderColor: COLORS.blue,
        borderWidth: 2,
        backgroundColor: 'white',
        height: 35,
        marginLeft: '50%',
        marginRight: '10%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
})