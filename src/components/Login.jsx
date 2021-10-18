import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import UserInput from './UserInput'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)
    const userState = useSelector(state => state.user)

    const handleEmailChange = (email) => {
        setEmail(email)
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) && password.length >= 8) setDisabled(false)
        else setDisabled(true)
    }

    const handlePasswordChange = (password) => {
        setPassword(password)
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) && password.length >= 8) setDisabled(false)
        else setDisabled(true)
    }

    const handleSubmitClick = () => {
        (userState.email === email && userState.password === password)
            ? window.location.href = '/list'
            : alert("Invalid email or password")
    }

    return (
        <div>
            <UserInput value={email} placeholder="Enter email address" type="email" label="Email Address" onChange={handleEmailChange} />
            <UserInput value={password} placeholder="Enter password" type="password" label="Password" onChange={handlePasswordChange} />
            <button className="ui secondary button" disabled={disabled} onClick={handleSubmitClick}>Log In</button>
        </div>
    )
}
