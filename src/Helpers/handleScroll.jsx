import {changeTabNoScroll} from "../Actions/Actions";


export const handleScroll = (dispatch) => {

    document.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;

        if(scrollPos < 100) {
            document.querySelector('.navBackground').style.backgroundColor = 'rgba(0,0,0,0.35)';
        } else {
            document.querySelector('.navBackground').style.backgroundColor = 'rgba(0,0,0,0.85)';
        }

        if (scrollPos > (document.querySelector('.ourStory').offsetTop - 10)) {
            dispatch(changeTabNoScroll(1));
            return true;
        }

        dispatch(changeTabNoScroll(0));
    });
}