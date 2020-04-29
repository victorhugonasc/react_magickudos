
import {createKudo} from '../../../State/Kudo/CreateKudoActions';
import {connect} from 'react-redux';
import KudoForm from './KudoForm';

function mapStateToProps(state) {
   
    return {
        kudo: state.create.kudo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createKudo: kudo => dispatch(createKudo(kudo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KudoForm);

