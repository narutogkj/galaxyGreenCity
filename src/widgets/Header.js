import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";
import { DrawerActions } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({ title, isHomeScreen, navigation }) => {

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@credentials')
            if (value == null) {
                navigation.navigate('LogIn2')
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: COLORS.blue }}>
            <TouchableOpacity style={{
                width: 50,
                paddingLeft: SIZES.padding * 2,
                justifyContent: 'center'
            }}

            >
                <Image
                    source={icons.location}
                    resizeMode="contain"
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 25
                    }}
                />

            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: "70%",
                        height: '70%',
                        backgroundColor: COLORS.lightGray3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        borderWidth: 1,
                        borderColor: COLORS.black
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{title}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer());
                }}
            >
                <Image
                    source={icons.list}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.lightGray4
                    }}
                />

            </TouchableOpacity>
        </View>
    )
}
export default Header;