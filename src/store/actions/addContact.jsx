import { ADD_CONTACT } from "../type";
import api from "../../api/contacts";
import { getContacts } from "./getContacts";

export const addContact = (payload) => (async (dispatch) => {
    await api.post('/contacts', payload)
    console.log("ADD_CONTACT" + payload);
    dispatch(getContacts())
    return {
        type: ADD_CONTACT,
        payload
    }
})