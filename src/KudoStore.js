
import {createStore} from 'redux';
import {rootReducer} from './KudoReducer'
import {addKudo} from './KudoAction';


//Store
export const store = createStore(
    rootReducer,
  );


//mapStateToProps  
export function mapStateToProps(state){
    return{
        message: state.kudo.message,
        sender: state.kudo.sender,
        receiver: state.kudo.receiver,
        layout: state.kudo.layout,
      }
}

//mapDispatchToProps
export function mapDispatchToProps (dispatch){
    return{
        addKudo: () => dispatch(addKudo()),
    }
}

