
import { fetchKudos, updateKudo, deleteKudo } from '../../../State/Kudo/GetKudosActions';
import { fetchColorPallete } from '../../../State/Color/GetColors/GetColorPalleteActions';
import { connect } from 'react-redux';
import KudosList from './KudosList';

function mapStateToProps(state) {
    return {
        kudos: state.getKudoReducer.kudos,
        pallete: state.getColorReducer.pallete
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchKudos: () => dispatch(fetchKudos()),
        fetchColorPallete: () => dispatch(fetchColorPallete()),
        updateKudo: kudo => dispatch(updateKudo(kudo)),
        deleteKudo: kudo => dispatch(deleteKudo(kudo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KudosList);

