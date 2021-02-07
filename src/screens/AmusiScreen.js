import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

import { restaurantData } from '../Data';

import { COLORS, images, FONTS, SIZES } from "../constants";
import { Header, CardOne, Footer, Fab } from '../widgets';

const AmusiScreen = ({ navigation }) => {

    const [bigImage, setBigImage] = useState(null);
    const [seletedPlotName, setSeletedPlotName] = useState('');
    const [seletedPlotPrice, setSeletedPlotPrice] = useState('');
    const [seletedPlotDescription, setSeletedPlotDescription] = useState('');

    useEffect(() => {
        setBigImage(restaurantData[0].menu[0].photo)
        setSeletedPlotName(restaurantData[0].menu[0].name)
        setSeletedPlotPrice(restaurantData[0].menu[0].price)
        setSeletedPlotDescription(restaurantData[0].menu[0].description)
    }, [])





    const renderItem = ({ item }) => {
        return (

            <TouchableOpacity onPress={() => {
                setBigImage(item.photo)
                setSeletedPlotDescription(item.description)
                setSeletedPlotName(item.name)
                setSeletedPlotPrice(item.price)
            }}>
                <View style={styles.scrollableImages}>
                    <Image
                        style={{ width: 70, height: 70, marginHorizontal: 10, borderRadius: 7 }}
                        source={item.photo} />
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <View style={{ marginTop: 22 }}>
                <Header title="Amusi Plot" isHomeScreen navigation={navigation} />
            </View>

            <View style={{ margin: 10 }}>
                <Image source={bigImage} style={{ height: 270, width: '100%', borderRadius: 10 }} />
            </View>
            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}

                legacyImplementation={false}

                data={restaurantData[0].menu}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
            <View
                style={{
                    width: SIZES.width,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding * 2,
                    marginBottom: 10
                }}
            >
                <Text style={{ textAlign: 'center', ...FONTS.h2 }}>{seletedPlotName} - {seletedPlotPrice}</Text>
                <Text style={{ ...FONTS.body3 }}>{seletedPlotDescription}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                <TouchableOpacity
                    style={{

                        width: SIZES.width * 0.7,
                        height: 40,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        marginTop: 15
                    }}
                    onPress={() => navigation.navigate("Inquiry")}
                >

                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Inquiry</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 10 }}></View>
        </ImageBackground>
    )
}

export default AmusiScreen;

const styles = StyleSheet.create({
    scrollableImages: {

    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
})