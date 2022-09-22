import AsyncStorage from "@react-native-async-storage/async-storage";


const BASE_URL = "https://uber-eats-clone-backend.onrender.com"



export const getOrders = async (city) => {
  const url = `${BASE_URL}/api/v1/orders`

  try {
    const jwtToken = await AsyncStorage.getItem("jwtToken");
    if(jwtToken===null){
      throw new Error("No jwt token present");
    }
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      }
    }

    const response = await fetch(url,options);
    const data = await response.json();
    console.log(data)
    return data.data

  } catch (error) {
    return error
  }
}

export const addOrders = async (restaurantName, cartItems, cartValue) => {
  const url = `${BASE_URL}/api/v1/orders`


  try {
    const jwtToken = await AsyncStorage.getItem("jwtToken");
    if(jwtToken===null){
      throw new Error("No jwt token present");
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
      body:JSON.stringify({restaurantName,cartItems,cartValue})
    }
    const response = await fetch(url,options);
    const data = await response.json();
    console.log(data)
    return data.data

  } catch (error) {
    return error
  }
}



export const getRestaurants = async (city) => {
  const url = `${BASE_URL}/api/v1/restaurants?city=${city}`

  try {
    const response = await fetch(url);
    const data = await response.json();

    const restaurantData = data.data;

    return restaurantData
  } catch (error) {
    return error
  }
}

export const userSignUp = async (email, password) => {
  const url = `${BASE_URL}/api/v1/users`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data.data
  } catch (error) {
    return error;
  }
}

export const userLogIn = async (email, password) => {
  const url = `${BASE_URL}/api/v1/users/login`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data.data
  } catch (error) {
    return error
  }
}

export const getLoggedInUserInfo = async () => {
  const url = `${BASE_URL}/api/v1/users/me`

  try {
    const jwtToken = await AsyncStorage.getItem("jwtToken");
    if(jwtToken===null){
      throw new Error("No jwt token present");
    }
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      }
    }

    const response = await fetch(url, options)
    const data = await response.json()
    return data.data
  } catch (error) {
    return error
  }
}

export const deleteUser = async ()=>{
  const url = `${BASE_URL}/api/v1/users/me`

  try {
    const jwtToken = await AsyncStorage.getItem("jwtToken");
  if(jwtToken===null){
      throw new Error("No jwt token present");
    }
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      }
    }
    const response = await fetch(url, options)

    const data = await response.json()
  if(!data.data){
      throw new Error("User Deletion Failed.");
    }
  } catch (error) {
    return error
  }


}