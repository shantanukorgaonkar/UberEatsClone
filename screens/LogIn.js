import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React ,{useState}from 'react'

const LogIn = ({navigation}) => {

    const [EnteredUserName,setEnteredUserName]=useState('');
    const [EnteredPassword,setEnteredPassword]=useState('');
    return (
        <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{width:'80%'}}>
                <Text style={styles.textStyle} >Enter Email</Text>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(text)=>{
                    setEnteredUserName(text)
                }}/>
            </View>
            <View  style={{width:'80%'}}>
                <Text style={styles.textStyle}>Enter Password</Text>
                <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>{
                    setEnteredPassword(text);
                }}/>
            </View>
            <View style={{ marginTop: 10,width:'30%' }}>
                <Button title='Log In' onPress={()=>{
                    console.log(EnteredPassword);
                    console.log(EnteredUserName);
                    navigation.navigate('BottomTabs')
                }}/>
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
    textStyle:{
        color:'black',
        fontSize:20,
        fontWeight:'300'
    }
})

export default LogIn