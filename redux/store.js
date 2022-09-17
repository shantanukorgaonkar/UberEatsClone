import {configureStore} from '@reduxjs/toolkit';

import cartSlice from './reducers/cart-reducer';

const store = configureStore({
    reducer:cartSlice.reducer
})

export default store