import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/RestaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/RestaurantDetail/MenuItem'
import ViewCart from '../components/RestaurantDetail/ViewCart'

export default function RestaurantDetail({route,navigation}) {
  return (
    <View style={{flex:1}}>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical:20}} />
      <MenuItem restaurantName={route.params.name}/>
      <ViewCart navigation={navigation}/>
    </View>
  )
}