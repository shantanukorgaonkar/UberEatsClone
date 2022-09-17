
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../screens/Home";
import Orders from "../screens/Orders";
import UserProfile from "../screens/UserProfile";
const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      headerShown: false,
      lazy:true,
      tabBarIcon: ({focused,color,size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'UserProfile') {
            iconName = 'account';
          } else if (route.name === 'Orders') {
              iconName = 'receipt'
          }
          return <Icon name={iconName} size={24} color={color} />;
      }

    })} >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
