import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, images, SIZES } from '../constants';
import { agents } from '../Data';
import { CardTwo, Header } from '../widgets';

const Agent = ({ route, navigation }) => {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray4, paddingBottom: 50, marginTop: 20 }}>
            <Header title="Our Agents" navigation={navigation} />
            <CardTwo clients={agents} />

        </SafeAreaView>
    )
}

export default Agent;