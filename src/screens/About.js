import React from 'react';
import { ImageBackground, View } from 'react-native';
import { COLORS, images } from '../constants';
import { clients } from '../Data';
import { CardTwo, Header, Fab } from '../widgets';

const About = ({ route, navigation }) => {


    return (
        <ImageBackground source={images.bg} style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="Our Team" navigation={navigation} />
            </View>
            <View style={{ marginBottom: 70 }}>
                <CardTwo clients={clients} navigation={navigation} />
            </View>
            <Fab navigation={navigation} />
        </ImageBackground>
    )
}

export default About;