import React, { useState, useEffect } from "react";
import './App.css';
import UseInput from "./library/UseInput";
import UseTabs from "./library/UseTabs";
import UseTitle from "./library/UseTitle";

function App() {
  return (
    <div>
      <UseInput />
      <UseTabs />
      <UseTitle />
    </div>
  );
}

export default App;
