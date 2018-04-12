import { combineReducers } from 'redux'
import { defaultStore } from '../store'
 
function contact(state = defaultStore, action) {

  switch (action.type) {
    default:
      break;
  }
  return state;
}

function tabs(state = defaultStore, action) {

  switch (action.type) {
    case "CHANGE_TABS" :
      state = {...state, tabIndex : action.value}
      break;
    default:
      break;
  }
  return state;
}


const reducers = combineReducers({
  contact,
  tabs
})

export default reducers
