import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
    const element = useRef();
    
    //React 16.8v 부터는 Hook 을 조건문, 반복문, 중첩함수 내에서 호출할 수 없습니다.
    useEffect(()=>{
        // componentDidMount, componentDidUpdate(지금은 빈배열이라 ㄴㄴ)
        if(typeof onClick !== "function") {
            return;
        }
        
         console.log(element);

        if(element && element.current) {
            element.current.addEventListener("click", onClick);
        }

        // element.current.addEventListener("click", onClick);
        
        // componentWillUnMount
        return () => {
            if(element && element.current){
                element.current.removeEventListener("click", onClick);
            }
            // element.current.removeEventListener("click", onClick);
        };
    }, []);
    return (typeof onClick !== "function") ? element : undefined;
}

function UseClick() {
    const sayHello = () => {console.log("hello");};
    const title = useClick(sayHello);

    return (
        <div className="UseClick">
            <h1>useClick</h1>
            <h6 ref = {title}>change this</h6>
        </div>
  );
}

export default UseClick;
