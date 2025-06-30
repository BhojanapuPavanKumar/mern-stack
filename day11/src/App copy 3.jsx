import { useEffect, useRef, useState } from 'react'

import './App.css'

const App=()=>{
  const [timeInSec,setTimeInSec]=useState(0);//If u want value to be stored + rendered on the screen
  const [isTimerRunning,setTimerRunning]=useState(true);
  const intervalId=useRef(null)//If u want value to be stored + do not care about the value on screen
  useEffect(()=>{ 
    intervalId.current=setInterval(()=>{
    setTimeInSec((prevTime)=>{
      console.log("time",prevTime)
      return prevTime+1;
    })
  },1000)

  return ()=>{
    console.log("clean up ")
    clearInterval(intervalId.current)
  }
},[])

const handlePause=(()=>{
    clearInterval(intervalId.current)
    setTimerRunning(false)
  })

const handlePlay=(()=>{
  if(!isTimerRunning){
    intervalId.current=setInterval(()=>{
    setTimeInSec((prevTime)=>{
      return prevTime +1;
    })}
  ,1000)
  setTimerRunning(true)
}

})

  return (
    <div>
      <h1>00:00:{timeInSec}</h1>
      {isTimerRunning ? <button onClick={handlePause}>PAUSE</button>:<button onClick={handlePlay}>PLAY</button>}
    </div>
  )
}

export default App
