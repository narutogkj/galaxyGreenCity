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
    TouchableWithoutFeedback,
    ImageBackground
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";
import { clients } from '../Data';
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

class LogIn2 extends Component {

    state = {
        userName: '',
        emailId: '',
        phoneNo: '',
        seletedClient: null,
        modalVisible: false,
        registerButton: 'Register',
        islogged: false
    }
    getData = async () => {
        try {
            return await AsyncStorage.getItem('@credentials')
        } catch (e) {
            alert(e);
        }
    }
    componentDidMount() {
        this.getData().then((value) => {
            if (value) {
                this.setState({ islogged: true })
                this.props.navigation.replace('drawer')
            }
        })
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
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ ...FONTS.body4 }}>{item.clientId}</Text>
                </View>

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
    storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@credentials', jsonValue)
        } catch (e) {
            alert(e);
        }
    }
    storingCreads = (props) => {
        this.setState({ registerButton: 'Wait...' })
        const data = {
            service_id: 'service_4k18ajc',
            template_id: 'template_0y359ss',
            user_id: 'user_0cclqHlI2Jk5b7IL1i7k6',
            template_params: {
                'clientName': this.state.seletedClient.name,
                'clientId': this.state.seletedClient.clientId,
                'emailId': this.state.emailId,
                'phoneNo': this.state.phoneNo,
                'userName': this.state.userName,
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            }
        };

        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            .then(function (response) {

            })
            .catch(function (error) {
                console.log(error);
            });



        const cread = {
            clientName: this.state.seletedClient.name,
            clientId: this.state.seletedClient.clientId,
            emailId: this.state.emailId,
            phoneNo: this.state.phoneNo,
            userName: this.state.userName
        }
        this.storeData(cread);
        if (cread.clientName == '' ||
            cread.clientId == '' ||
            cread.emailId == '' ||
            cread.phoneNo == '' ||
            cread.userName == ''
        ) {
            alert("Fields cannot be empty")
        } else {
            props.navigation.replace('drawer')
        }

    }

    render() {

        return (

            <ImageBackground
                source={images.bg}
                style={{
                    ...styles.container,

                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <View style={{ width: "65%", height: 145 }}>
                        <Image style={{ width: "100%", height: '100%', marginBottom: 10 }} source={images.brand} />
                    </View>
                </View>
                <View>
                    <TextInput
                        mode='outlined'
                        label="Your Name"
                        style={{ ...styles.textInput }}
                        onChangeText={(text) => { this.setState({ userName: text }) }}
                        value={this.state.userName}
                    />
                    <TextInput
                        mode='outlined'
                        label="Email Id"
                        style={{ ...styles.textInput }}
                        storingCreads
                        onChangeText={(text) => { this.setState({ emailId: text }) }}
                        value={this.state.emailId}
                    />
                    <TextInput
                        mode='outlined'
                        label="Phone No."
                        style={{ ...styles.textInput }}
                        onChangeText={(text) => { this.setState({ phoneNo: text }) }}
                        value={this.state.phoneNo}
                    />
                    <TouchableOpacity
                        onPress={() => this.setState({ modalVisible: true })}
                    >
                        <View style={{ ...styles.textInput, borderWidth: 0.5, borderRadius: 3, marginLeft: 50, marginTop: 15 }}>
                            <Text style={{
                                marginVertical: 7,
                                color: "rgba(0,0,0,0.6)",
                                fontSize: 16
                            }}>
                                {(this.state.seletedClient) ? this.state.seletedClient.name : "Client Name"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ modalVisible: true })}
                    >
                        <View style={{ ...styles.textInput, borderWidth: 0.5, borderRadius: 3, marginLeft: 50, marginTop: 15 }}>
                            <Text style={{
                                marginVertical: 7,
                                color: "rgba(0,0,0,0.6)",
                                fontSize: 16
                            }}>
                                {(this.state.seletedClient) ? this.state.seletedClient.clientId : "Client Id"}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.storingCreads(this.props) }} >
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
                            >{this.state.registerButton}
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <Image style={{ width: '60%', height: 40 }} source={images.sayri} />
                </View>
                {this.renderClientsListModal()}
            </ImageBackground>



        )
    }
}

export default LogIn2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'white',
        height: 40,
        marginHorizontal: 100,
        borderRadius: 10,
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
        height: 35,
        marginHorizontal: 40,
        paddingLeft: 10,
        marginVertical: 5,
    }
})
