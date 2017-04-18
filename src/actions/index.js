export function loginUserSuccess(token) {
    localStorage.setItem('token', token);
    return {
        type: "LOGIN_USER_SUCCESS",
        payload: {
            token: token
        }
    }
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: "LOGOUT"
    }
}

export function loginUserFailure(error) {
    localStorage.removeItem('token');
    return {
        type: "LOGIN_USER_FAILURE",
        payload: {
            status: error.response.status,
            statusText: error.response.statusText
        }
    }
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    console.log("parseJson:"+ JSON.stringify(response))
    return response.json()
}

export const refreshLogin = () => {
    return {
        type: "REFRESH_LOGIN"
    }
}

export const tryLogin = (login, pass) => {
    return function (dispatch) {
        fetch('api/login', {
            credentials: 'omit',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                pass: pass
            })
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => {
                try {
                    console.log("try to decode", JSON.stringify(data))
                    dispatch(loginUserSuccess(data.token));
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure({
                    response: {
                        status: 403,
                        statusText: 'Invalid credentials'
                    }
                }));
            });
    }
}