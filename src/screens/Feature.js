import React, { useState } from 'react';
import { List, Divider } from 'react-native-paper';
import { View, ImageBackground, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Header, Footer, Fab } from '../widgets/';
import { images, SIZES, FONTS, icons, COLORS } from '../constants';

const Feature = ({ navigation }) => {

    const [expanded, setExpanded] = useState(true);
    const [modalVisible, setModalVisibility] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null);

    const handlePress = () => setExpanded(!expanded);
    const renderClientsListModal = () => {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisibility(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{
                            height: 450,
                            width: SIZES.width * 0.95,
                            borderColor: COLORS.black,
                            borderRadius: SIZES.radius,
                            borderWidth: 2

                        }}>
                            <Image style={{
                                width: '100%', height: '100%', borderRadius: SIZES.radius,
                                borderWidth: 2,
                            }}

                                source={selectedFeature} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        )
    }

    return (
        <ImageBackground source={images.bg} style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Header title="Features" navigation={navigation} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Image style={{ width: "100%", height: 50, marginBottom: 10 }} source={images.banner} />
            </View>
            <View style={{ margin: 10 }} >
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#2e71dc',
                        paddingVertical: 15
                    }}
                    onPress={() => {
                        setSelectedFeature(images.feature)
                        setModalVisibility(true)

                    }}
                >


                    <Image
                        source={icons.basket}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.h3 }}>Amusi Phase -1</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ ...FONTS.h3 }}>{`>`}</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#2e71dc',
                        paddingVertical: 15
                    }}
                    onPress={() => {
                        setSelectedFeature(images.feature)
                        setModalVisibility(true)
                    }}
                >


                    <Image
                        source={icons.pin}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.h3 }}>Amusi Phase -2</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ ...FONTS.h3 }}>{`>`}</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#2e71dc',
                        paddingVertical: 15
                    }}
                    onPress={() => {
                        setSelectedFeature(images.feature3)
                        setModalVisibility(true)
                    }}
                >


                    <Image
                        source={icons.car}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.h3 }}>Amusi Phase -3</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ ...FONTS.h3 }}>{`>`}</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#2e71dc',
                        paddingVertical: 15
                    }}
                    onPress={() => {
                        setSelectedFeature(images.feature4)
                        setModalVisibility(true)
                    }}
                >


                    <Image
                        source={icons.nearby}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.h3 }}>Amusi Phase -4</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ ...FONTS.h3 }}>{`>`}</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#2e71dc',
                        paddingVertical: 15
                    }}
                    onPress={() => {
                        setSelectedFeature(images.feature)
                        setModalVisibility(true)
                    }}
                >


                    <Image
                        source={icons.list}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.h3 }}>Amusi & TSM Hospital</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ ...FONTS.h3 }}>{`>`}</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#2e71dc',
                        paddingVertical: 15
                    }}
                    onPress={() => {
                        setSelectedFeature(images.feature3)
                        setModalVisibility(true)
                    }}
                >


                    <Image
                        source={icons.like}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.h3 }}>Bashant Khera</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ ...FONTS.h3 }}>{`>`}</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#2e71dc',
                        paddingVertical: 15
                    }}
                    onPress={() => {
                        setSelectedFeature(images.feature4)
                        setModalVisibility(true)
                    }}
                >


                    <Image
                        source={icons.user}
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.h3 }}>Outer Ring Road Behta</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ ...FONTS.h3 }}>{`>`}</Text>
                    </View>

                </TouchableOpacity>



            </View>
            <Footer />
            <Fab navigation={navigation} />
            {renderClientsListModal()}
        </ImageBackground>
    )
}

export default Feature;