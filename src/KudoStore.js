
import {createStore} from 'redux';
import {rootReducer} from './KudoReducer'
import {addAction,subtractAction,getAllKudosAction,onSubmitForm} from './KudoAction';


//Store
export const store = createStore(
    rootReducer,
  );


//mapStateToProps  
export function mapStateToProps(state){
    return{
        number: state.math.number,
        message: state.math.message,
        sender: state.math.sender,
        receiver: state.math.receiver,
        layout: state.math.layout,
      }
}

//mapDispatchToProps
export function mapDispatchToProps (dispatch){
    return{
        add: () => dispatch(addAction()),
        subtract: () => dispatch(subtractAction()),
        getKudos: () => dispatch(getAllKudosAction()),
        teste: () => dispatch(onSubmitForm()),
    }
}

