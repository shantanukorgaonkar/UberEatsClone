import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native'

export default function ViewCart({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const cartItems = useSelector((state) => state.selectedItems.items);
    const restaurantName = useSelector((state) => state.selectedItems.restaurantName);
    const cartValue = cartItems.map((item) => (Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);
    const cartValueUSD = `$${cartValue.toLocaleString("en-US", {
        style: 'currency',
        currency: "USD"
    })}`


    const orderCheckout = async () => {
        setLoading(true);
        const url='https://uber-eats-clone-backend.onrender.com/api/v1/orders';
        const options ={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({restaurantName,cartItems,cartValue})
        }
        try {
            const result = await fetch(url,options)
            if(result.ok){
                setTimeout(() => {
                    setLoading(false)
                    navigation.navigate("OrderCompleted", {
                        cartItems,
                        restaurantName,
                        cartValue,
                        cartValueUSD
                    })
                }, 2500)
            }
        } catch (error) {
            console.log(error.message)
        }
       
    }

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>
                            {restaurantName}
                        </Text>
                        {cartItems.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subTotalContainer}>
                            <Text style={styles.subTotalText}>Subtotal</Text>
                            <Text style={{ color: 'black' }}>{cartValueUSD}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={styles.checkoutButtonTouchableWrapper}
                                onPress={() => {
                                    orderCheckout()
                                    setModalVisible(false)
                                }}>
                                <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                                <Text style={{
                                    position: 'absolute',
                                    color: 'white',
                                    right: 20,
                                    fontSize: 15,
                                    top: 17
                                }}>
                                    {cartValue ? cartValueUSD : ""}
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </>

        )
    }

    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                {checkoutModalContent()}
            </Modal>
            {cartValue ? <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 80,
                zIndex: 999
            }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            backgroundColor: 'black',
                            padding: 15,
                            borderRadius: 30,
                            width: 300,
                            position: "relative",
                            flexDirection: 'row',
                            justifyContent: "space-around"
                        }}
                        onPress={() => setModalVisible(true)}>
                        <Text style={{ color: "white", fontSize: 20 }}>View Cart </Text>
                        <Text style={{ color: "white", fontSize: 20 }}>{cartValueUSD}</Text>
                    </TouchableOpacity>

                </View>
            </View> : <></>}
            {loading ? <View
                style={{
                    backgroundColor: 'black',
                    position: 'absolute',
                    opacity: 0.6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:'100%',
                    width:'100%'
                }}>
                <LottieView
                    style={{ height: 200 }}
                    source={require('../../assets/animations/scanner.json')}
                    autoPlay
                    speed={3} />
            </View> : <></>}
        </>

    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
        color: 'black'
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    subTotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
        color: 'black'
    },
    checkoutButtonTouchableWrapper: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative'
    }
})