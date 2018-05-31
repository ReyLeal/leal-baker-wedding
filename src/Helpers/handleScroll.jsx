import {changeTabNoScroll} from "../Actions/Actions";


export const handleScroll = (dispatch) => {
    document.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;


        if (scrollPos > (document.querySelector('.ourStory').offsetTop - 10)) {
            dispatch(changeTabNoScroll(1));
            return true;
        }

        dispatch(changeTabNoScroll(0));
    });
}