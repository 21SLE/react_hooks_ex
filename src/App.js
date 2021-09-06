import React, { useState, useEffect } from "react";
import './App.css';
import UseInput from "./library/UseInput";
import UseTabs from "./library/UseTabs";

function App() {
  const sayHello = () => console.log("hello");

  const [val, setVal] = useState(0);
  const [secVal, setSecVal] = useState(0);

  useEffect(sayHello, [val]);
  // useEffect(sayHelo, []); 처음 컴포넌트가 mount됐을 때만 실행됨.

  return (
    <div>
      <UseInput />
      <UseTabs />
      <div>useEffect</div>
      <button onClick={()=>setVal(val + 1)}>{val}</button>
      <button onClick={()=>setSecVal(secVal - 1)}>{secVal}</button>
    </div>
    

  );
}

export default App;
