import { View, Text, Image } from 'react-native'
import React from 'react'

export default function About({route}) {
  const {name,image,price,reviews,rating,categories} = route.params;

const formattedCategories = categories.map((cat)=>cat.title).join(" . ")

const description = `${formattedCategories} ${price ? ' . '+ price :""} . ${rating} . (${reviews}+)`
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title ={name} />
      <RestaurantDescription desc={description}/>
    </View>
  )
}

const RestaurantImage =(props)=>(
   <Image source={{uri:props.image}} style={{width :"100%" , height:180}}/>
)

const RestaurantTitle = (props)=>(
  <Text style={{fontSize:29, fontWeight:'600', marginTop:10, marginHorizontal:15, color:"#000000"}}>{props.title}</Text>
)

const RestaurantDescription = (props)=>(
  <Text style={{marginTop:10,marginHorizontal:15,fontWeight:"400",fontSize:15.5 ,color:"#000000"}}>{props.desc}</Text>
)