
import {fetchKudos,updateKudo} from '../../../State/Kudo/GetKudosActions';
import {connect} from 'react-redux';
import KudosList from './KudosList';

function mapStateToProps(state) {
    return {
        kudos: state.getKudoReducer.kudos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchKudos: () => dispatch(fetchKudos()),
        updateKudo: kudo => dispatch(updateKudo(kudo))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(KudosList);

