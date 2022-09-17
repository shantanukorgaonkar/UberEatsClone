import { createSlice } from '@reduxjs/toolkit'



let defaultState = {
    selectedItems: { items: [], restaurantName: '' }
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: defaultState,
    reducers: {

        addToCart(state, action) {
            if (action.payload.checkboxValue) {

                if (action.payload.restaurantName === state.selectedItems.restaurantName) {
                    state.selectedItems = {
                        items: [...state.selectedItems.items, action.payload.item],
                        restaurantName: action.payload.restaurantName
                    }
                } else {
                    state.selectedItems = {
                        items: [action.payload.item],
                        restaurantName: action.payload.restaurantName
                    }
                }


                // console.log(state.selectedItems);
            } else {
                state.selectedItems = {
                    items: [
                        ...state.selectedItems.items.filter((item) => item.title !== action.payload.item.title)
                    ],
                    restaurantName: action.payload.restaurantName
                }
                //console.log(state.selectedItems);
            }

        }
    }
})

// let cartReducer = (state = defaultState, action) => {

//     switch (action.type) {
//         case 'ADD_TO_CART': {
//             let newState = { ...state };
//             newState.selectedItems = {
//                 items: [...newState.selectedItems.items, action.payload],
//                 restaurantName: action.payload.restaurantName
//             }

//             console.log("Add to cart")
//             return newState
//         }

//         default : return state;
//     }
// }
export const cartActions = cartSlice.actions

export default cartSlice