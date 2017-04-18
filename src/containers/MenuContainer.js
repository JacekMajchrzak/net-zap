import { connect } from 'react-redux'
import { logout } from '../actions'
import Menu from '../components/Menu'


const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout())
        }
    }
}

const MenuContainer = connect(
    null,
    mapDispatchToProps
)(Menu)

export default MenuContainer