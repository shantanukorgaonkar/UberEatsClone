import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { getOrders } from '../api'
import { Divider } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';


const Orders = () => {

    const [orders, setOrders] = useState([]);

    useFocusEffect(
        useCallback(() => {

            const callGetOrdersApi = async () => {

                const ordersArray = await getOrders();
                setOrders(ordersArray)
            }


            callGetOrdersApi()
        }, [])
    )

    return (
        <ScrollView>
            {orders.map((order, index) => (
                <View style={{ margin: 15, padding: 10, backgroundColor: '#e91e63', borderRadius: 10 }} key={index}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            {order.restaurantName}
                        </Text>
                    </View>
                    <View>
                        {order.cartItems.map((item, index) => (
                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }} >
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    {item.price}
                                </Text>
                            </View>
                        ))}

                    </View>
                    <Divider color='white' width={1.0} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>
                            {`$${order.cartValue}`}
                        </Text>
                    </View>
                </View>
            ))}

        </ScrollView>
    )
}

export default Orders