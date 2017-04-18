const initialState = {
    isAuthenticated: false,
    errorMessage: null
}

const login = (state = initialState, action) => {
    console.log("reducer:"+JSON.stringify(action));
    switch (action.type) {
        case 'LOGIN_USER_SUCCESS':
            return Object.assign({}, state, {
                isAuthenticated: true,
                errorMessage: null
            })
        case 'LOGIN_USER_FAILURE':
            return Object.assign({}, state, {
                isAuthenticated: false,
                errorMessage: action.payload.statusText
            })
        case 'REFRESH_LOGIN':
            return Object.assign({}, state, {
                isAuthenticated: true,
                errorMessage: null
            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                isAuthenticated: false,
                errorMessage: null
            })
        default:
            return state
    }
}

export default login