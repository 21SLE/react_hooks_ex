import React, { useEffect, useRef } from "react";

const useFadeIn = (duration=1, delay=0) => {
    
    const element = useRef();
    useEffect(() => {
        if(typeof duration !== "number" || typeof delay !== "number") {
            return;
        }
        const {current} = element;
            
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}`;
            current.style.opacity = 1;

        // if(element.current) {
        //     console.log(element);
        //     const {current} = element;
        //     console.log(current);
        //     current.style.transition = `opacity ${duration}s ease-in-out ${delay}`;
        //     current.style.opacity = 1;
        //     console.log(current);
        // }
    }, []);
    return {ref: element, style: {opacity: 0}};
}

function UseFadeIn() {
    const fadeInH6 = useFadeIn(1, 0);
    return (
        <div className="UseFadeIn">
            <h1>useFadeIn</h1>
            <h6 {...fadeInH6}>hello</h6>
        </div>
  );
}

export default UseFadeIn;
