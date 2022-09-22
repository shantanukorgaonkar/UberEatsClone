import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { deleteUser, getLoggedInUserInfo } from '../api'

const UserProfile = ({ navigation }) => {
    const [userData, setUserData] = useState('')

    useEffect(() => {
        const getLoggedInUserDetails = async () => {
            const data = await getLoggedInUserInfo();
            setUserData(data)
        }

        getLoggedInUserDetails();
    }, [])


    const logoutUser = async()=>{
        try {
            await AsyncStorage.removeItem('jwtToken');
            navigation.navigate('LandingScreen')
        } catch (error) {
            console.log(error)
        }
    }

    
    const deleteUserAccount = async()=>{
        try {
            await deleteUser()
            await AsyncStorage.removeItem('jwtToken');
            navigation.navigate('LandingScreen')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>

            <View style={{ margin: 10, width: '30%' }}>
                <Button title='Edit Profile' onPress={() => {
                    navigation.navigate("EditProfile")
                }} />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {userData ? <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>{`Email: ${userData.email}`}</Text> : <ActivityIndicator size="large" />}
            </View>
            <View style={{ margin: 10, width: '100%' , flexDirection:'row' ,justifyContent:'space-evenly'}}>
                
                <View style={{width:'40%'}}>
                <Button title='Log Out' onPress={ () => {
                   logoutUser();
                }} />
                </View>
                <View style={{width:'40%'}}>
                <Button title='Delete Account' onPress={ () => {
                   deleteUserAccount()

                }} />
                </View>
               
            </View>
        </View>
    )
}

export default UserProfile