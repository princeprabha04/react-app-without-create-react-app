import LifeCycle from "./components/LifeCycle";
import MySVGIcon from "./MySVGIcon";
import PrinceCaffeine from "./components/PrinceCaffeine";
import React from "react";
import { Route, Routes, useNavigate } from "react-router";
import Usecallback from "./components/Usecallback";
import UseTransition from "./components/UseTransition";

function App() {
  const navigate = useNavigate()
  // console.log("prince-prabha")
  const handleClick = ()=>{
    // console.log("delete icon clicked")
  } 

  const handleNavigate = (url)=>()=>{
    // console.log("url",url)
    navigate(url)
  }
  return (
    <div>
      {/* <MySVGIcon iconName="Delete-Icon" onClick={handleClick}/> */}
      {/* <LifeCycle/> */}
      <button onClick={handleNavigate('coffeeshope')}>coffee shop</button>
      <button onClick={handleNavigate('/usecallback')}>use callback</button>

      <button onClick={handleNavigate('/usetransition')}>use transition</button>

      {/* <PrinceCaffeine/> */}
      <Routes>
        <Route path='/usecallback' element={<Usecallback/>}/>
        <Route path='/coffeeshope' element={<PrinceCaffeine/>}/>
        <Route path='/usetransition' element={<UseTransition/>}/>


      </Routes>
    </div>
  );
}

export default App;
