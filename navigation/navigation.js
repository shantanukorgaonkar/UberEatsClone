import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import RestaurantDetail from "../screens/RestaurantDetail";
import {Provider as ReduxProvider} from 'react-redux';
import store from "../redux/store";
import OrderCompleted from "../screens/OrderCompleted";
import BottomTabs from './BottomTabs';
import LandingScreen from "../screens/LandingScreen";
import SignUp from '../screens/SignUp';
import LogIn from '../screens/LogIn';
import EditProfile from "../screens/EditProfile";

export default function RootNavigation() {

  const Stack = createStackNavigator();

  const screenOptions ={
    headerShown : false,
  };

  return(
    <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
               {/* <Stack.Screen name="Orders" component={Orders} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    </ReduxProvider>

  )
  
}