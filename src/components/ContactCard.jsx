import React from 'react'

export const ContactCard = ({ contact, onDelete }) => {
    return (
        <div className="item">
            <div className="content">
                <div className="header">{contact.name}</div>
                <div>{contact.phone}</div>
            </div>
            <i className="trash alternate outline icon" onClick={() => onDelete(contact)}></i>
        </div>
    )
}
