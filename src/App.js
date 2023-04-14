import LifeCycle from "./components/LifeCycle";
import MySVGIcon from "./MySVGIcon";
import PrinceCaffeine from "./components/PrinceCaffeine";
import React from "react";

function App() {
  console.log("prince-prabha")
  const handleClick = ()=>{
    console.log("delete icon clicked")
  }
  return (
    <div>
      {/* <MySVGIcon iconName="Delete-Icon" onClick={handleClick}/> */}
      {/* <LifeCycle/> */}
      <PrinceCaffeine/>
    </div>
  );
}

export default App;
