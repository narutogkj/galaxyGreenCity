import React from 'react';
import { View, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { Header, Footer, Fab } from '../widgets/';
import { images, SIZES } from '../constants';


const AboutUs = ({ navigation }) => {
    return (
        <ImageBackground source={images.bg} style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="About Owners" navigation={navigation} />
            </View>
            <ScrollView>
                <Image style={{ flex: 1, width: '97%', height: 350, borderRadius: 10, margin: 5 }} source={images.Atul} />
                <View style={{ flex: 1, margin: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: SIZES.h3, color: 'rgba(0,0,0,0.7)' }}>ATUL KUMAR YADAV</Text>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.4)' }}>Founder & CEO</Text>
                    <View style={{ marginVertical: 5 }}></View>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.6)' }}>connect@galaxygreencity.com</Text>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.6)' }}>Atulkumaryadav2222@gmail.com</Text>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.6)' }}>+91 7054845555, +91 9161845555</Text>
                </View>
                <Divider />
                <Image style={{ flex: 1, width: '97%', height: 350, borderRadius: 10, margin: 5 }} source={images.Vishal} />
                <View style={{ flex: 1, margin: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: SIZES.h3, color: 'rgba(0,0,0,0.7)' }}>VISHAL SINGH CHAUHAN</Text>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.4)' }}>Director</Text>
                    <View style={{ marginVertical: 5 }}></View>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.6)' }}>connect@galaxygreencity.com</Text>
                    <Text style={{ fontSize: SIZES.body3, color: 'rgba(0,0,0,0.6)' }}>+91 9044412642</Text>
                </View>
                <Divider />




                <Footer />
            </ScrollView>
            <Fab navigation={navigation} />
        </ImageBackground>
    )
}

export default AboutUs;