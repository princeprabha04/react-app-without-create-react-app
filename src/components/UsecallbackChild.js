import React from 'react'

function UsecallbackChild({incrementCount}) {
    console.log("this is from child")

  return (
    <div>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default UsecallbackChild