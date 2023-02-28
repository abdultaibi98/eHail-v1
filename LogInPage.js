import React, {useState} from 'react';
import {Pressable ,ImageBackground, Text, StyleSheet, View} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const backImage = require('../../../assets/background.webp');


const onSignInPressed = () => {
    console.warn('Log in pressed');
}

const onForgotPasswordPressed = () => {
    console.warn('Forgot password pressed');
}

const LogInPage = ()=> {
    const navigation = useNavigation();
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    
    const onSignUpPressed = () => {
        console.warn('Sign up pressed');
        navigation.navigate("SignUpPage");}
    
        return(
        <View style={styles.container}>
            <ImageBackground style={styles.image} resizeMode="cover" source={backImage}>
                <View style={styles.container2}>
                    <Text style={styles.headlineText}>Log in</Text>
                    <View style={styles.container3}>
                        <Text style={styles.containerText}>Email address:</Text>
                        <CustomInput placeholder="Email address" value={email} setValue={setEmail}/>
                        <Text style={styles.containerText}>Password:</Text>
                        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
                        <View style={styles.space}/>
                        <CustomButton text={'Log in'} onPress={onSignInPressed} type='PRIMARY'/>
                        <CustomButton text={'Forgot password'} onPress={onForgotPasswordPressed} type="SECONDARY"/>
                    </View>
                    <View style={styles.space}/>
                    <CustomButton text={'Dont have an account? Sign up here'} onPress={onSignUpPressed} type="TERTIARY"/>
                </View>
            </ImageBackground>
        </View>)
}

export default LogInPage;

const styles = StyleSheet.create({
    space:{
        height:30
    },
    buttonText:{
        fontSize: 20,
        color: "white"},
    button2:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    headlineText: {
        color: "green",
        fontSize: 55,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom:100
    },
    container:{
        flex: 1,
    },
    container2:{
        alignItems: 'center'
    },
    container3:{
        alignItems: 'center',
        height: 300,
        width: 300,
        backgroundColor: 'green',
        borderRadius:40
    },
    containerText:{
        color:'white',
        fontSize: 20,
        textAlign: 'left',
        paddingTop: 10,
        width: 270,
        height: 50
    },
    image:{
        flex:1,
        justifyContent: "center"
    }
})