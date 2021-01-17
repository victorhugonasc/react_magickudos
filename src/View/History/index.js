import { fetchAllKudos } from '../../State/Kudo/GetKudosActions';
import { fetchUsers } from '../../State/User/GetUsersActions';
import { fetchTeams } from '../../State/Team/GetHistoryActions';
import { fetchColorPallete } from '../../State/Color/GetColors/GetColorPalleteActions';
import { connect } from 'react-redux';
import GetHistory from './GetHistory/GetHistory';

function mapStateToProps(state) {
    return {
        kudos: state.getKudoReducer.kudos,
        pallete: state.getColorReducer.pallete,
        teams: state.getHistory.teams
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllKudos: () => dispatch(fetchAllKudos()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchTeams: () => dispatch(fetchTeams()),
        fetchColorPallete: () => dispatch(fetchColorPallete()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetHistory);