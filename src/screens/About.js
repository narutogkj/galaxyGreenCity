import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, images, SIZES } from '../constants';
import { clients } from '../Data';
import { CardTwo, Header } from '../widgets';

const About = ({ route, navigation }) => {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray4, paddingBottom: 50, marginTop: 20 }}>
            <Header title="Our Team" navigation={navigation} />
            <CardTwo clients={clients} />

        </SafeAreaView>
    )
}

export default About;