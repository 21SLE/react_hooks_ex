import React, { Component, useState } from "react";
import './App.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if(typeof validator === "function") {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);  
    }
    
  };
  return { value , onChange }; // {value}는 {value: value}라는 오브젝트를 줄여서 쓴것
}

function App() {
  const maxLen = value => value.length <= 10; // maxLen은 불린값 리턴하는 함수
  const name = useInput("Ms. ", maxLen); //validator로 최대길이 검증하는 함수 넣어줌

  const checkTxt = value => !value.includes("@"); // @를 포함하지 않고 싶을때

  return (
    <div className = "App">
      <h1>Hello!</h1>
      {/* <input placeholder="What is ur Name" value = {name.value} onChange = {name.onChange} /> */}
      <input placeholder="What is ur Name" {...name} />
      {/* name에 useInput으로 받은 value가 있어서 name.value라고 쓸 수 있음  */}
      {/* value = { name.value } onChange = {name.onChange} 대신 {...name} 이라고 써도 됨 이렇게 쓰면 name안에 있는걸 다 unpack해서 써주는것 */}
    </div>
  );
}

export default App;
