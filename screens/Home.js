import { View, Text, ScrollView , BackHandler} from 'react-native'
import React, {useEffect, useState} from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'
import { Divider } from 'react-native-elements'
import {YELP_API_KEY} from '@env'
import { getOrders, getRestaurants } from '../api';
import { useFocusEffect } from '@react-navigation/native';


export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];



export default function Home({navigation}) {
  const [restaurants,setRestaurants]= useState([]);
  const [city,setCity] = useState("San Francisco");
  const [activeTab,setActiveTab]=useState('Delivery')

  const getRestaurantsFromYelp = async ()=>{
  try {
    const restaurantData = await getRestaurants(city);
    const filteredRestaurantData = restaurantData.filter((restaurant)=>(
      restaurant.transactions.includes(activeTab.toLowerCase())
    ))

    setRestaurants(filteredRestaurantData)
  } catch (error) {
    console.log(error);
  }
    
  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  useEffect(()=>{
     getRestaurantsFromYelp();
 

  },[city,activeTab])
  return (
    <View style={{backgroundColor:'#eee' , flex:1}}>
        <View style={{backgroundColor:"white", padding:15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} /> 
            <SearchBar cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantData={restaurants} navigation={navigation}/>
        </ScrollView>
        <Divider width={1}/>
    </View>
  )
}