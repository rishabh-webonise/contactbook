import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation()
    let mainPage = location.pathname === "/"

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Book</h2>
                <Link to={mainPage ? "/list" : "/"} >
                    <button type="button" className="btn btn-sm btn-primary">
                        {mainPage ? "View contacts" : "Add a new contact"}
                    </button>
                </Link>
            </div>
        </div>
    )
}
