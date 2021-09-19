import React, { useState, useEffect } from "react";

//navigator가 online이나 offline으로 가는걸 막아준다.
const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function"){
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
}

function UseNetwork() {
    const handleNWChange = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNWChange);
    return (
        <div className="UseNetwork">
            <h1>useNetwork</h1>
            <h6>{onLine ? "Online" : "Offline"}</h6>
        </div>
  );
}

export default UseNetwork;
