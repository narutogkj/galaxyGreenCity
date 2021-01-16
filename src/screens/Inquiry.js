import React, { Component } from "react";
import { TextInput } from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Modal,
    TouchableWithoutFeedback
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";
import Animated, { Clock, clockRunning, Easing, startClock, stopClock, timing, debug, interpolate, Extrapolate, concat, color } from 'react-native-reanimated';
import { TopGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler';
import { clients } from '../Data';
const { width, height } = Dimensions.get('window')
const { Value, event, block, cond, eq, set } = Animated;
import { Header, Footer } from '../widgets';

function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0),
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease),
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock),
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position,
    ])


}






class Inquiry extends React.Component {

    state = {
        seletedClient: null,
        modalVisible: false
    }
    renderClient = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#2e71dc'
                }}
                onPress={() => {

                    this.setState({ modalVisible: false, seletedClient: item })
                }}
            >


                <Image
                    source={item.icon}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 10
                    }}
                />
                <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    renderClientsListModal = () => {

        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.state.modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => this.setState({ modalVisible: false })}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{
                            height: 500,
                            width: SIZES.width * 0.8,
                            backgroundColor: COLORS.lightGray3,
                            borderColor: '#2e71dc',
                            borderRadius: SIZES.radius,
                            borderWidth: 1

                        }}>
                            <FlatList
                                data={clients}
                                renderItem={this.renderClient}
                                keyExtractor={(item) => item.name}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2

                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        )
    }


    render() {
        return (

            <View style={{
                ...StyleSheet.absoluteFill,
                marginTop: 24

            }}>
                <Header title="Inquiry" />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Image style={{ width: "64%", height: 140, marginBottom: 10 }} source={images.brand} />
                </View>
                <View style={styles.container}>
                    <TextInput
                        mode='outlined'
                        label="Your Name"
                        style={{ ...styles.textInput }}
                    />
                    <TextInput
                        mode='outlined'
                        label="Email Id"
                        style={{ ...styles.textInput }}

                    />
                    <TextInput
                        mode='outlined'
                        label="Phone No."
                        style={{ ...styles.textInput }}
                    />
                    <TouchableOpacity
                        onPress={() => this.setState({ modalVisible: true })}
                    >
                        <View style={{ ...styles.textInput, borderWidth: 0.5, borderRadius: 5, marginLeft: 30, marginTop: 15 }}>
                            <Text style={{
                                marginVertical: 10,
                                color: "rgba(0,0,0,0.6)",
                                fontSize: 16
                            }}>
                                {(this.state.seletedClient) ? this.state.seletedClient.name : "Client Name"}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Tabs")}
                    >
                        <View style={{
                            ...styles.button,
                            borderWidth: 1,
                            borderColor: COLORS.blue,
                            marginTop: 15,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLORS.blue,
                            }}
                            >
                                Submit
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>

                {this.renderClientsListModal()}
                <Footer />
            </View>



        )
    }
}

export default Inquiry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 65,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    closeButton: {
        height: 40, width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width / 2 - 20,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    textInput: {
        height: 50,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        // borderColor: "rgba(0,0,0,0.2)"
    }
})
