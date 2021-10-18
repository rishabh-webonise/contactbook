import React, { useState } from 'react'
import { uuid } from 'uuidv4'

export const AddContact = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const add = (e) => {
        e.preventDefault();
        if (!name || !phone) {
            alert('Please fill both the fields')
        } else {
            //TODO: generate from uuid
            setName('')
            setPhone('')
            onAdd({
                id: uuid(),
                name: name,
                phone: phone
            })
        }
    }

    return (
        <div className="ui main">
            <br />
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input type="number" name="phone" placeholder="Phone No." value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <button className="ui button blue" type="submit">Add</button>
            </form>
        </div>
    )
}
