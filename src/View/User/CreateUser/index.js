
import {createUser} from '../../../State/User/CreateUserActions';
import {connect} from 'react-redux';
import UserComponent from './UserComponent';


function mapStateToProps(state) {
   
    return {
        user: state.createUser.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createUser: user => dispatch(createUser(user))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserComponent);
