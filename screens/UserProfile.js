import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const UserProfile = ({navigation}) => {
    return (
        <View style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>

            <View style={{ margin: 10, width: '30%' }}>
                <Button title='Edit Profile' onPress={()=>{
                    navigation.navigate("EditProfile")
                }}/>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{fontSize:20, fontWeight:'400',color:'black'}}>Email : </Text>
                <Text style={{fontSize:20, fontWeight:'400',color:'black'}}>shantanu@gmail.com</Text>
            </View>
            <View style={{ margin: 10, width: '30%' }}>
                <Button title='Log Out' />
            </View>

        </View>
    )
}

export default UserProfile