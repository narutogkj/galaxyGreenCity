import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, images, SIZES } from '../constants';
import { agents } from '../Data';
import { CardTwo, Header, Footer, Fab } from '../widgets';

const Agent = ({ route, navigation }) => {


    return (
        <ImageBackground source={images.bg} style={{ flex: 1, backgroundColor: COLORS.lightGray4, paddingBottom: 50 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="Our Owners" navigation={navigation} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Image style={{ width: "100%", height: 50, marginBottom: 10 }} source={images.banner} />
            </View>
            <CardTwo clients={agents} navigation={navigation} />
            <View style={{ marginTop: 150 }}>
                <Footer />
            </View>
            <Fab navigation={navigation} />
        </ImageBackground>
    )
}

export default Agent;