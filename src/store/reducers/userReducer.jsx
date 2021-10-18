const initialState = {
    email: 'rishabh@gmail.com',
    password: 'rishabh123',
    login: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
        default: return state
    }
}
