import { View, Text, TextInput, Button,ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LandingScreen = ({ navigation }) => {
const [userLoggedIn,setUserLoggedIn]= useState(true);


    useFocusEffect(
        React.useCallback(()=>{
            const checkUserLoggedIn = async ()=>{
                const isLoggedIn =await AsyncStorage.getItem("jwtToken");
                if(isLoggedIn!==null){
                    setUserLoggedIn(true)
                    navigation.navigate("BottomTabs")
                }else{
                    setUserLoggedIn(false)
                }
            }
            checkUserLoggedIn()
        },[])
    )

     return(
        !userLoggedIn?<View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
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
  </View>:<View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator size="large"/></View>
     )  

    
}

export default LandingScreen