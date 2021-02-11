
import {fetchUsers} from '../../../State/User/GetUsersActions';
import {connect} from 'react-redux';
import UsersList from './UsersList';

function mapStateToProps(state) {
    return {
        users: state.getUsers.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersList);

