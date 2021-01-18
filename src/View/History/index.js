import { fetchTeams } from '../../State/Team/GetHistoryActions';
import { fetchAllKudos } from '../../State/Kudo/GetKudosActions';
import { fetchUsers } from '../../State/User/GetUsersActions';
import { fetchColorPallete } from '../../State/Color/GetColors/GetColorPalleteActions';
import { connect } from 'react-redux';
import GetHistory from './GetHistory/GetHistory';

function mapStateToProps(state) {
    return {
        teams: state.historyState.teams,
        kudos: state.getKudoReducer.kudos,
        users: state.getUsers.users,
        pallete: state.getColorReducer.pallete,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTeams: () => dispatch(fetchTeams()),
        fetchAllKudos: () => dispatch(fetchAllKudos()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchColorPallete: () => dispatch(fetchColorPallete()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetHistory);