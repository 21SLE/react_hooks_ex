import React, { useState, useEffect } from "react";
import './App.css';
import UseInput from "./library/UseInput";
import UseTabs from "./library/UseTabs";
import UseTitle from "./library/UseTitle";
import UseClick from "./library/UseClick";
import UseConfirm from "./library/UseConfirm";

function App() {
  return (
    <div>
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
    </div>
  );
}

export default App;
