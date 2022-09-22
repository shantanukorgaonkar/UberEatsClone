import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react'
import { isEmailValid, isPasswordValid } from '../validation/validation';
import { userSignUp } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';








const SignUp = ({ navigation }) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [emailInputIsFocused, setEmailInputIsFocused] = useState(false);
    const [passwordInputIsFocused, setPasswordInputIsFocused] = useState(false);
    const [emailError, setEmailError] = useState(" ")

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
                    onFocus={() => setEmailInputIsFocused(true)} />
                {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}
            </View>
            <View style={{ width: '80%', marginVertical: 10 }}>
                <Text style={styles.textStyle}>Enter Password</Text>
                {!passwordIsValid && passwordInputIsFocused && <Text style={{ color: 'red' }}>Invalid Password</Text>}
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={(text) => {
                    setPasswordIsValid(isPasswordValid(text));
                    setEnteredPassword(text);
                }}

                    onFocus={() => setPasswordInputIsFocused(true)} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title='Create Account' disabled={!(emailIsValid && passwordIsValid)} onPress={async () => {

                    try {
                        const result = await userSignUp(enteredEmail, enteredPassword);
                        if (result) {
                            const token = result.token;
                            await AsyncStorage.setItem("jwtToken", token);
                            return navigation.navigate('BottomTabs')
                        } else {
                            return setEmailError(result.message)
                        }
                    } catch (error) {
                        return setEmailError(error.message)
                    }

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