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
            onPress={() => navigation.navigate(item.url)}
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
                        height: 150,
                        borderRadius: SIZES.radius,
                        borderColor: '#2e71dc',
                        borderWidth: 1
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        left: SIZES.width * 0.7,
                        height: 40,
                        width: SIZES.width * 0.2,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image source={icons.emi} style={{ width: '100%', height: '100%' }} />
                </View>

                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 30,
                        width: SIZES.width * 0.35,
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
                    <Text style={{ ...SIZES.h5 }}>₹ {item.duration}</Text>
                </View>
            </View>
            <Text style={{ ...FONTS.body3 }}>{item.name}</Text>

            <View
                style={{
                    marginTop: SIZES.padding,
                    flexDirection: 'row'
                }}
            >
                {/* <Image
                    source={icons.star}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.primary,
                        marginRight: 10
                    }}
                /> */}
                <Text style={{ ...SIZES.body3 }}>Ploat size available </Text>
                <Text style={{ ...SIZES.body3 }}>{item.plotSize}</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        marginLeft: 10
                    }}
                >


                </View>


            </View>
            <View
            >
                <Text>(Residence and Commercial)</Text>
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
