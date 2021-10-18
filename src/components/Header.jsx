import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation()
    let mainPage = location.pathname === "/list"
    const userName = useSelector(state => state.user.email)

    const getName = () => userName.split('@')[0]

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2 style={{ display: 'flex', flex: 1 }}> {`${getName()}'s Contact Book`} </h2>
                <Link to={mainPage ? "/add" : "/list"} >
                    <button className="ui secondary button">
                        {mainPage ? "Add a new contact" : "View contacts"}
                    </button>
                </Link>
            </div>
        </div>
    )
}
