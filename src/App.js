import React, { useState, useEffect } from "react";
import './App.css';
import UseInput from "./library/UseInput";
import UseTabs from "./library/UseTabs";
import UseTitle from "./library/UseTitle";
import UseClick from "./library/UseClick";
import UseConfirm from "./library/UseConfirm";
import UsePreventLeave from "./library/UsePreventLeave";

function App() {
  return (
    <div>
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
    </div>
  );
}

export default App;
