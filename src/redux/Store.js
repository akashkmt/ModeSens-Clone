import { combineReducers, legacy_createStore as createStore } from 'redux';
import cartReducer from './Cart/reducer';
import loginReducer from './login/reducer';
import { cartCountReducer } from './CartCount/reducer';

const rootReducer = combineReducers(
    {
        user: loginReducer,
        cart: cartReducer,
        cartCount: cartCountReducer
    }
)

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())