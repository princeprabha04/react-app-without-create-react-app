import LifeCycle from "./components/LifeCycle";
import MySVGIcon from "./MySVGIcon";
import PrinceCaffeine from "./components/PrinceCaffeine";
import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import Usecallback from "./components/Usecallback";

function App() {
  const navigate = useNavigate()
  // console.log("prince-prabha")
  const handleClick = ()=>{
    console.log("delete icon clicked")
  } 

  const handleNavigate = ()=>{
    navigate('coffeeshope')
  }
  return (
    <div>
      {/* <MySVGIcon iconName="Delete-Icon" onClick={handleClick}/> */}
      {/* <LifeCycle/> */}
      <button onClick={handleNavigate}>coffee shop</button>
      {/* <PrinceCaffeine/> */}
      <Routes>
        <Route path='/usecallback' element={<Usecallback/>}/>
        <Route path='/coffeeshope' element={<PrinceCaffeine/>}/>

      </Routes>
    </div>
  );
}

export default App;
