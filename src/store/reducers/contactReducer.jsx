import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, SET_CONTACTS } from '../type'

const initialState = {
    contacts: []
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS: return { ...state, contacts: action.payload }
        // case GET_CONTACTS: return { ...state, contacts: action.payload }
        // case ADD_CONTACT: return { ...state, ...action.payload }
        // case DELETE_CONTACT: return { ...state, ...action.payload }
        default: return state
    }
}
