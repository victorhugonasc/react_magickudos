
import {fetchKudos} from '../../../State/Kudo/GetKudosActions';
import {connect} from 'react-redux';
import KudosList from './KudosList';

function mapStateToProps(state) {
    console.log("statetoprops");
    console.log(state);
    return {
        kudos: state.GetKudosReducers.kudos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchKudos: () => dispatch(fetchKudos())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(KudosList);

