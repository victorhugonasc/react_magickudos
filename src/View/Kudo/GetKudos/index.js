
import { fetchKudos, updateKudo, storeKudos, deleteKudo } from '../../../State/Kudo/GetKudosActions';
import { fetchColorPallete } from '../../../State/Color/GetColors/GetColorPalleteActions';
import { connect } from 'react-redux';
import KudosList from './KudosList/KudosList';

function mapStateToProps(state) {
    return {
        kudos: state.getKudoReducer.kudos,
        pallete: state.getColorReducer.pallete,
        fetch: state.getColorReducer.fetch,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchKudos: () => dispatch(fetchKudos()),
        fetchColorPallete: () => dispatch(fetchColorPallete()),
        updateKudo: kudo => dispatch(updateKudo(kudo)),
        storeKudos: () => dispatch(storeKudos()),
        deleteKudo: kudo => dispatch(deleteKudo(kudo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KudosList);

