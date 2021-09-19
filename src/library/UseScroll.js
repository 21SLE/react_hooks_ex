import React, { useState, useEffect } from "react";

const useScroll = onChange => {
   const [state, setState] = useState({
       x: 0,
       y: 0
   });

   const onScroll = (event) => {
       setState({x: window.scrollX, y: window.scrollY});
   }

   useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
   }, []);
   return state;
}

function UseScroll() {
    const {y} = useScroll();
    return (
        <div className="UseScroll" style={{height: "400vh"}}>
            {/* <h1>useScroll</h1> */}
            <h1 style={{ position: "fixed", top: "0", right: "0", float: "right", color: y > 200 ? "red" : "blue" }}>useScroll</h1>
        </div>
  );
}

export default UseScroll;
