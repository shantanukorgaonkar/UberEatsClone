import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import OrderItem from '../components/RestaurantDetail/OrderItem';

export default function OrderCompleted({ route }) {
    const { cartItems, restaurantName, cartValue, cartValueUSD } = route.params;



    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <LottieView
                style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false} />

            <Text style={{
                fontWeight: '600',
                fontSize: 15,
                marginBottom: 10,
                color: 'black'
            }}>Your Order at {restaurantName} has been placed for {cartValueUSD}</Text>
            <LottieView
                style={{ height: 200, alignSelf: 'center' }}
                source={require("../assets/animations/cooking.json")}
                autoPlay
                speed={0.5}
            />
        </View>
    )
}