import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../constants';




const CardTwo = ({ clients, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        marginVertical: SIZES.base,
                        width: SIZES.width / 2.5
                    }}
                    onPress={() => navigation.navigate('drawer', { screen: 'Location of Plots' })}
                >
                    <View
                        style={{
                            height: 140,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: COLORS.primary,
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20
                            }}
                        />
                    </View>
                    <View
                        style={{
                            padding: SIZES.padding,
                            backgroundColor: COLORS.lightGray4,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
                        <Text style={{ ...FONTS.body5 }}>{item.clientId}</Text>
                        <Text style={{ ...FONTS.body5 }}>{item.des}</Text>
                        <Text style={{ ...FONTS.body5 }}>{item.phone}</Text>

                    </View>

                </TouchableOpacity>
            </View>
        )
    }





    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={clients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />

        </SafeAreaView>
    )
}

export default CardTwo;
