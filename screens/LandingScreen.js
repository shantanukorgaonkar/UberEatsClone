import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';


const LandingScreen = ({ navigation }) => {
    return (

        <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ margin: 10, width: '30%' }}>
                <Button title='Sign Up' onPress={() => {
                    navigation.navigate("SignUp")
                }} />
            </View>
            <View style={{ margin: 10, width: '30%' }}>
                <Button title='Log In' onPress={() => {
                    navigation.navigate("LogIn")
                }} />
            </View>
        </View>

    )
}

export default LandingScreen