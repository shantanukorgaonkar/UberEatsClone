
export const getOrders = async (city) => {
    const url=`https://uber-eats-clone-backend.onrender.com/api/v1/orders`
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data
    
      } catch (error) {
        console.log(error);
      }
}
      


export const getRestaurants = async (city)=>{
    const url=`https://uber-eats-clone-backend.onrender.com/api/v1/restaurants?city=${city}`

    try {
        const response = await fetch(url);
        const data = await response.json();
      
        const restaurantData = data.data;
        
        return restaurantData
      } catch (error) {
        console.log(error);
      }
}
