import React from 'react'
import { ContactCard } from './ContactCard'

export const ContactList = ({ contacts, onDelete, onEdit }) => {

    return (
        <div className="ui celled list">
            <h2>Contact List</h2>
            {(contacts.length) ?
                contacts.map(contact => <ContactCard key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit} />) :
                <p>No contacts to display</p>
            }
        </div>
    )
}
