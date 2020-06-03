import { scroller } from "react-scroll";
const navigateToElement = element => {
    scroller.scrollTo(element, {
        duration: 1500,
        delay: 0,
        smooth: true,
        offset: -70
    });
};
export {navigateToElement}
