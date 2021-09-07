import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    
    const handle = (event) => {
        const {clientY} = event;
        if(clientY <= 0) {
            onBefore();
        }
    }

    useEffect(()=> {
        if(typeof onBefore !== "function") {
            return;
        }

        document.addEventListener("mouseleave", handle);
        
        //conponentWillUnMount
        return () => {
            document.removeEventListener("mouseleave", handle);
        }
    }, []);
}

function UseBeforeLeave() {
    const begForLife = () => console.log("Please dont leave");
    useBeforeLeave(begForLife);
    return (
        <div className="UseBeforeLeave">
            <h1>useBeforeLeave</h1>
            <span>prited on console when your mouse leave the window document</span>
        </div>
  );
}

export default UseBeforeLeave;
