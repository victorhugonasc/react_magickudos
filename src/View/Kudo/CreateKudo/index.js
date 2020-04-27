
import {fetchKudo} from '../../../State/Kudo/CreateKudoActions';
import {connect} from 'react-redux';
import KudoComponent from './KudoComponent';


function mapStateToProps(state) {
   
    return {
        kudo: state.create.kudo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchKudo: kudo => dispatch(fetchKudo(kudo))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(KudoComponent);
