import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react'
import { isEmailValid, isPasswordValid } from '../validation/validation';









const SignUp = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [emailInputIsFocused, setEmailInputIsFocused] = useState(false);
    const [passwordInputIsFocused,setPasswordInputIsFocused] = useState(false);

    return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: '600', color: 'black' }} >Create Your Account</Text>
            </View>

            <View style={{ width: '80%' }}>
                <Text style={styles.textStyle}>Enter Email</Text>
                {!emailIsValid && emailInputIsFocused && <Text style={{ color: 'red' }}>Invalid Email</Text>}
                <TextInput style={styles.input} onChangeText={(text) => {
                    setEmailIsValid(isEmailValid(text))
                    setEnteredEmail(text);

                }}
                onFocus={()=> setEmailInputIsFocused(true)} />
            </View>
            <View style={{ width: '80%' }}>
                <Text style={styles.textStyle}>Enter Password</Text>
                {!passwordIsValid && passwordInputIsFocused && <Text style={{ color: 'red' }}>Invalid Password</Text>}
                <TextInput style={styles.input} secureTextEntry={true} value={enteredPassword} onChangeText={(text) => {
                    setPasswordIsValid(isPasswordValid(text));
                    setEnteredPassword(text);
                }} 
                
                onFocus={()=> setPasswordInputIsFocused(true)} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title='Create Account' disabled={!(emailIsValid && passwordIsValid)} onPress={() => {
                    console.log(enteredPassword)
                }} />
            </View>
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
    textStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '300'
    }
})

export default SignUp