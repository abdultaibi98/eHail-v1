import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

const backImage = require('../../../assets/background.webp');

function Homepage(){
    const navigation = useNavigation();

    const onSignUpPressed = () => {
        console.warn('Sign up pressed');
        navigation.navigate("SignUpPage");
    }

    const onLogInPressed = () => {
        console.warn('Log in pressed');
        navigation.navigate("LogInPage");}
        
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.image} resizeMode="cover" source={backImage}>
            <View style={styles.container2}>
                <Text style={styles.headlineText}>Welcome to (name)</Text>
                <CustomButton text={'Log in'} onPress={onLogInPressed} type='PRIMARY'/>
                    <View style={styles.space}/>
                    <CustomButton text={'Sign up'} onPress={onSignUpPressed} type='PRIMARY'/>
            </View>    
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1
        },
        container2: {
            height:500,
            alignItems: 'center'
        },
        image:{
            flex:1,
            justifyContent: "center"
        },
        headlineText: {
            color: "green",
            fontSize: 55,
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom:160
        },
        buttonText: {
            fontSize: 30,
            color: "white"
        },
          button:{
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 40,
            backgroundColor: 'green',
            width:200,
            justifyContent: 'center'
          },
        space:{
            height:30
        }
    }
)

export default Homepage;