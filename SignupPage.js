import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const backImage = require('../../../assets/background.webp');

const SignupPage = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn('Register pressed');
    }

    const onHomePressed = () => {
        console.warn('Home pressed');
        navigation.navigate('Homepage');
    }

    return(

        <View style={styles.container}>
            <ImageBackground style={styles.image} resizeMode="cover" source={backImage}>
                <View style={styles.container2}>
                    <Text style={styles.headlineText}>Sign up</Text>
                    <View style={styles.container3}>
                        <Text style={styles.containerText}>Full name:</Text>
                        <CustomInput placeholder='Full name' value={name} setValue={setName} />
                        <Text style={styles.containerText}>Email address:</Text>
                        <CustomInput placeholder='Email address' value={email} setValue={setEmail} />
                        <Text style={styles.containerText}>Password:</Text>
                        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>
                        <Text style={styles.containerText}>Confirm password:</Text>
                        <CustomInput placeholder='Confirm Password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>
                        <View style={styles.space}/>
                        <CustomButton text={'Register'} onPress={onRegisterPressed} type='PRIMARY'/>
                    </View>
                    <View style={styles.space}/>
                    <CustomButton text={'Home'} onPress={onHomePressed} type="TERTIARY"/>
                </View>
            </ImageBackground>
        </View>)
}

export default SignupPage;

const styles = StyleSheet.create({
    text:{
        color:'green',
        fontSize: 30
    },
    space:{
        height:30
    },
    buttonText:{
        fontSize: 20,
        color: "white"},
    button:{
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 40,
        backgroundColor: '#90EE90',
        width:200,
        justifyContent: 'center'
    },
    button2:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    headlineText: {
        color: "green",
        fontSize: 55,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom:20
    },
    container:{
        flex: 1,
    },
    container2:{
        alignItems: 'center'
    },
    container3:{
        alignItems: 'center',
        height: 470,
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
    },
    emailInput:{
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 40,
        width: 250
    }
})