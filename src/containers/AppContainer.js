import { connect } from 'react-redux'
import App from './App'
import { refreshLogin } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onInitAuth: (isAuthenticated) => {
            console.log("isAuthenticated:"+isAuthenticated)
            console.log("token:"+(localStorage.getItem("token")!=null))
            console.log("bool:"+ (!isAuthenticated && (localStorage.getItem("token")!=null)))
            if(!isAuthenticated && (localStorage.getItem("token")!=null)){
                dispatch(refreshLogin())
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.isAuthenticated
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer