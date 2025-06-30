import { useEffect, useState } from 'react'

import './App.css'

const App=()=>{
  const [timeInSec,setTimeInSec]=useState(0);
  
  useEffect(()=>{// useEffect will only run on "initial render" ?? why ?? because dependency array is empty "[ ]"
  let id=setInterval(()=>{
    setTimeInSec((prevTime)=>{
      console.log("time",prevTime)
      return prevTime+1;
    })
  },1000)// --> browser (call this func after every 1 secound)
  //--> OK --> id :: st1
  //when component re-renders (unmount+mount)
  // we need to cleanup old interval

    console.log("logic...",id)
    return ()=>{
      console.log("clean up ")
      clearInterval(id)
    }
  },[])
  return (
    <div>
      <h1>00:00:{timeInSec}</h1>
    </div>
  )
}

export default App
