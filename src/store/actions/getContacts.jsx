import { GET_CONTACTS, SET_CONTACTS } from "../type";
import api from "../../api/contacts";

export const getContacts = () => (async (dispatch) => {
    const response = await api.get('/contacts')
    dispatch(setContacts(response.data))
})

export const setContacts = (payload) => {
    if (payload) return {
        type: SET_CONTACTS,
        payload
    }
}
