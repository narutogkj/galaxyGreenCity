import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";
import Animated, { Clock, clockRunning, Easing, startClock, stopClock, timing, debug, interpolate, Extrapolate, concat } from 'react-native-reanimated';
import { TopGestureHandler, State, TapGestureHandler, TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')
const { Value, event, block, cond, eq, set } = Animated;

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






class LogIn extends Component {
    constructor() {
        super()
        this.buttonOpacity = new Value(1);
        this.onStateChange = event([
            {
                nativeEvent: ({ state }) => block([
                    cond(eq(state, State.END), set(this.buttonOpacity,
                        runTiming(new Clock(), 1, 0)
                    ))
                ])
            }
        ]);


        this.onCloseState = event([
            {
                nativeEvent: ({ state }) => block([
                    cond(eq(state, State.END), set(this.buttonOpacity,
                        runTiming(new Clock(), 0, 1)
                    ))
                ])
            }
        ]);


        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
        })

        this.bgY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [-height / 5.5, 0],
            extrapolate: Extrapolate.CLAMP
        })

        this.textInputZindex = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, -1],
            extrapolate: Extrapolate.CLAMP
        })

        this.textInputY = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [0, 100],
            extrapolate: Extrapolate.CLAMP
        })

        this.textInputOpacity = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP
        })

        this.rotateCross = interpolate(this.buttonOpacity, {
            inputRange: [0, 1],
            outputRange: [180, 360],
            extrapolate: Extrapolate.CLAMP
        })
    }
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Animated.View style={{
                    ...styles.container, transform: [
                        { translateY: this.bgY }
                    ]
                }}>

                    <Image
                        source={images.bg}
                        resizeMode='contain'
                        style={{ flex: 1, width: 300, height: 300 }}
                    />
                </Animated.View>

                <View style={{ height: height / 4 }}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View style={{
                            ...styles.button, backgroundColor: '#2E71DC', opacity: this.buttonOpacity,
                            transform: [{ translateY: this.buttonY }]
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Register</Text>
                        </Animated.View>

                    </TapGestureHandler>
                    <Animated.View style={{
                        zIndex: this.textInputZindex,
                        opacity: this.textInputOpacity,
                        transform: [{ translateY: this.textInputY }],
                        height: height / 2,
                        ...StyleSheet.absoluteFill,
                        top: null,
                        justifyContent: 'center'
                    }}>
                        <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                            <Animated.View style={styles.closeButton}>
                                <Animated.Text style={{
                                    fontSize: 15, transform: [{
                                        rotate: concat(this.rotateCross, 'deg')
                                    }]
                                }}>
                                    X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>
                        <TextInput
                            placeholder="EMAIL"
                            style={styles.textInput}
                            placeholderTextColor="black"
                        />
                        <TextInput
                            placeholder="PASSWORD"
                            style={styles.textInput}
                            placeholderTextColor="black"
                        />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Tabs")}
                        >
                            <Animated.View style={styles.button}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2E71DC' }}>Register</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 35,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
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
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: "rgba(0,0,0,0.2)"
    }
})