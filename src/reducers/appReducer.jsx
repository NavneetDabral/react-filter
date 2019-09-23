import {initialState} from '../index'
import {INJECTDATA} from '../actions/Actions';


function AppReducer(state = initialState.appReducer, action) {
    switch (action.type) {
      

        case INJECTDATA:
            return Object.assign({},state,{
                appState: {
                    ...state.appState, 
                    userData:action.payload,
                    loading:false
                  }  
            })


      default:
        return state
    }
  }
  

  export default AppReducer;