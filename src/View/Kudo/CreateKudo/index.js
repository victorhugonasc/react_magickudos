
import { createKudo } from '../../../State/Kudo/CreateKudoActions';
import { connect } from 'react-redux';
import { fetchColorPallete } from '../../../State/Color/GetColors/GetColorPalleteActions';
import KudoForm from './KudoForm';

function mapStateToProps(state) {
   
    return {
        kudo: state.create.kudo,
        pallete: state.getColorReducer.pallete
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createKudo: kudo => dispatch(createKudo(kudo)),
        fetchColorPallete: () => dispatch(fetchColorPallete())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KudoForm);

