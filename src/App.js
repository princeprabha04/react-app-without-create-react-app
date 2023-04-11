import React from "react";
import MySVGIcon from "./MySVGIcon";
import LifeCycle from "./components/LifeCycle";

function App() {
  console.log("prince-prabha")
  const handleClick = ()=>{
    console.log("delete icon clicked")
  }
  return (
    <div>
      <MySVGIcon iconName="Delete-Icon" onClick={handleClick}/>
      <LifeCycle/>
    </div>
  );
}

export default App;
