import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { contactReducer } from './reducers/contactReducer'

export const store = createStore(combineReducers({
    user: userReducer,
    contacts: contactReducer,
}), applyMiddleware(thunk))

