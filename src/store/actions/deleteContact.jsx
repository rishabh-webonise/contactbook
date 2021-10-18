import { DELETE_CONTACT } from "../type";
import api from "../../api/contacts";
import { getContacts } from "./getContacts";

export const deleteContact = (payload) => (async (dispatch) => {
    await api.delete('/contacts/' + payload)
    console.log("DELETE_CONTACT" + payload);
    dispatch(getContacts())
    return {
        type: DELETE_CONTACT,
        payload
    }
})
