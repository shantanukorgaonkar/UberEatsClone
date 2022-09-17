import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs(props) {
    return (
        <View style={styles.headerTabButtonContainer}>
            <HeaderTabButton text="Delivery" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <HeaderTabButton text="Pickup" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
        </View>
    )
}

const HeaderTabButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{ color:props.activeTab === props.text ? "white":"black", fontSize: 15, fontWeight: "900" }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerTabButtonContainer: {
        flexDirection: "row", alignSelf: "center"
    },
})