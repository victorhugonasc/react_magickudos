
import {createStore} from 'redux';
import {rootReducer} from './Reducer'
import {addAction,subtractAction} from './Action';


//Store
export const store = createStore(
    rootReducer,
  );


//mapStateToProps  
export function mapStateToProps(state){
    return{
        number: state.math.number,
      }
}

//mapDispatchToProps
export function mapDispatchToProps (dispatch){
    return{
        add: () => dispatch(addAction()),
        subtract: () => dispatch(subtractAction()),
    }
}



