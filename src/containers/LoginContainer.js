import { connect } from 'react-redux'
import { tryLogin } from '../actions'
import Login from '../components/Login'


const mapDispatchToProps = (dispatch) => {
    return {
        onHandleLogin: (login,pass) => {
            console.log(login+" "+pass);
            dispatch(tryLogin(login, pass))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.login.errorMessage
    }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer