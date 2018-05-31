import { combineReducers } from 'redux'
import { defaultStore } from '../store'
import { scrollTo } from '../Helpers/ScrollTo';

function contact(state = defaultStore, action) {

    switch (action.type) {
        default:
            break;
    }
    return state;
}

const tabIndexIDMappig = {
    0 : '#Home',
    1 : '#OurStory',
}

function redirectNavigation(index) {
    scrollTo(document.querySelector(tabIndexIDMappig[index]), 750);
}


function tabs(state = defaultStore, action) {

    switch (action.type) {
        case "CHANGE_TABS" :
            // state = {...state, tabIndex : action.value}
            redirectNavigation(action.value)
            break;
        case "CHANGE_TABS_NS" :
            state = {...state, tabIndex : action.value}
            break;
        default:
            break;
    }
    return state;
}


const reducers = combineReducers({
    contact,
    tabs,
})

export default reducers;
