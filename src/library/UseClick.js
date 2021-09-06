import React, { useState, useEffect, useRef } from "react";

function UseClick() {
    const inputText = useRef();
    
    useEffect(() => {
        //useEffect안쓰면 setTimeout함수가 너무 빨리 동작해서 inputText가 undefined로 나와서
        //useEffect안에 그냥 넣어준것.
        setTimeout(()=> inputText.current.focus(), 2000);
    });
    

    return (
        <div className="UseClick">
            <h1>useClick</h1>
            <input ref = {inputText} placeholder="cute kancho"/>
        </div>
  );
}

export default UseClick;
