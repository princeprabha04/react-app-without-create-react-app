import React, { useCallback, useMemo, useState } from 'react'
import UsecallbackChild from './UsecallbackChild'

function Usecallback() {
    const [ count, setCount] = useState(0)

    const incrementCount = useCallback(()=>{
        console.log("this is from parent", count)
        setCount(count+1)
    },[count])
    const incrementMemo = useMemo(()=>{
        console.log("thincrementCountis is from parent", count)
        incrementCount
    },[incrementCount])
  return (
    <div>
        <h1>{count}</h1>
        <UsecallbackChild incrementCount={incrementCount}/>
    </div>
  )
}

export default Usecallback