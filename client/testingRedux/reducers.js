import { combineReducers } from 'redux'
 
function count(state = {count : 0}, action) {

  switch (action.type) {
    case 'ADD':
      state = {...state, count: action.value}
      break;

  case 'SUBTRACT':
      state = {...state, count: action.value}
    break;

  default:
    break;
  }
  return state;
}
 
 
const counter = combineReducers({
  count
})
 
export default counter
