import { combineReducers } from 'redux'
import { defaultStore } from '../store'

function tabs(state = defaultStore, action) {
    switch (action.type) {
        case "CHANGE_TABS" :
            state = { ...state, tabIndex : action.value };
            break;
        default:
            break;
    }
    return state;
}


const reducers = combineReducers({
    tabs,
});

export default reducers;
