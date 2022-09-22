import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React ,{useState}from 'react'
import { userLogIn } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = ({navigation}) => {

    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredPassword,setEnteredPassword]=useState('');
    const [loginError,setLoginError] = useState(' ');
    return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{width:'80%'}}>
                <Text style={styles.textStyle} >Enter Email</Text>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(text)=>{
                    setEnteredEmail(text)
                }}/>
            </View>
            <View  style={{width:'80%'}}>
                <Text style={styles.textStyle}>Enter Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={(text)=>{
                    setEnteredPassword(text);
                }}/>
            </View>
            <View style={{ marginTop: 10,width:'30%' }}>
                <Button title='Log In' onPress={async ()=>{
                     try {
                        const result = await userLogIn(enteredEmail, enteredPassword);
                        if (result) {
                            const token = result.token;
                            await AsyncStorage.setItem("jwtToken", token);
                            return navigation.navigate('BottomTabs')
                        } else {
                            return setLoginError(result.message)
                        }
                    } catch (error) {
                        return setLoginError(error.message)
                    }
                }}/>

               
            </View>
            <Text style={{color:'red',marginVertical:10}}>{loginError}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
    },
    textStyle:{
        color:'black',
        fontSize:20,
        fontWeight:'300'
    }
})

export default LogIn