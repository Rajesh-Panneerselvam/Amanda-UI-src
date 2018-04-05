import * as constants from '../actions/constants';  


let cases = [];
const state = {
  caseTypes: []
}

export default function caseReducer(state={state}, action) {  
  switch(action.type) {
    case constants.LOAD_CASES_SUCCESS:
      return state;
    case constants.LOAD_CASE_TYPES_SUCCESS:
    alert(state.caseTypes)  
    const newState = Object.assign({}, state, {caseTypes:action.caseTypes});
      alert(newState.caseTypes)
      return newState;
    default:
      return state;
  }
}