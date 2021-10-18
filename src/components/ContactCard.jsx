import React from 'react'

export const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <div className="item" style={{
            display: 'flex',
        }}>
            <div className="content" style={{
                flex: 10,
            }}>
                <div className="header">{contact.name}</div>
                <div>{contact.phone}</div>
            </div>
            <i className="edit alternate outline icon" onClick={() => onEdit(contact)} style={{
                color: "blue",
                margin: "0px 10px",
            }} />
            <i className="trash alternate outline icon" onClick={() => onDelete(contact)} style={{
                color: "red",
            }} />
        </div>
    )
}
