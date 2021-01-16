import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";




const CardOne = ({ restaurantData, navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
            onPress={() => navigation.navigate("Restaurant", {
                item
            })}
        >
            <View
                style={{
                    marginBottom: SIZES.padding
                }}
            >
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: 200,
                        borderRadius: SIZES.radius,
                        borderColor: '#2e71dc',
                        borderWidth: 2
                    }}
                />

                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: SIZES.width * 0.3,
                        backgroundColor: COLORS.white,
                        borderColor: '#2e71dc',
                        borderWidth: 1,
                        borderTopRightRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}
                >
                    <Text style={{ ...SIZES.h4 }}>₹ {item.duration}</Text>
                </View>
            </View>
            <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

            <View
                style={{
                    marginTop: SIZES.padding,
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={icons.star}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.primary,
                        marginRight: 10
                    }}
                />
                <Text style={{ ...SIZES.body3 }}>{item.rating}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 10
                    }}
                >

                    <View
                        style={{ flexDirection: 'row' }}

                    >
                        <Text style={{ ...SIZES.body3 }}>{item.plotSize}</Text>
                        <Text style={{ ...SIZES.h3, color: COLORS.darkgray }}> . </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Image style={{ width: "100%", height: 50, marginBottom: 10 }} source={images.banner} />
            </View>
            <FlatList
                data={restaurantData}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 50
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({

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

export default CardOne;
