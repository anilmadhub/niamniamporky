import React, {useEffect} from 'react';

const AnimateOnScroll = (domRef,setElementVisible) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setElementVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
};

export default AnimateOnScroll;
