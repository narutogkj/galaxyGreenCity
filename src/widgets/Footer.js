import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";
import { images } from '../constants';

const Footer = () => {
    return (<View style={{ padding: 20 }}>
        <Image source={images.footer} style={{
            width: '100%',
            height: 65,
            padding: 20
        }} />
    </View>)
}

export default Footer;