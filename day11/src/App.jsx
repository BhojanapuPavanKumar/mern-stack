import { useEffect, useRef, useState } from 'react'

import './App.css'

const App=()=>{
  const [timeInSec,setTimeInSec]=useState(0);//If u want value to be stored + rendered on the screen
  const [isTimerRunning,setTimerRunning]=useState(true);
  const [laps,setLaps]=useState([]);
  const intervalId=useRef(null)//If u want value to be stored + do not care about the value on screen
  useEffect(()=>{ 
    if(isTimerRunning){intervalId.current=setInterval(()=>{
    setTimeInSec((prevTime)=>{
      return prevTime+1;
    })
  },20)}

  return ()=>{
    console.log("clean up ")
    clearInterval(intervalId.current)
  }
},[isTimerRunning])

const handlePause=(()=>{
  clearInterval(intervalId.current)
  if(isTimerRunning)
    setTimerRunning(false)
  })

  const handleLap=(()=>{
    setLaps((prev)=>{
      const temp=[...prev]
      temp.push(timeInSec);
      return temp;
    })
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

const handleReset=()=>{
  setTimeInSec(0);
  setTimerRunning(false);
}

const hours=Math.floor(timeInSec/3600).toString().padStart(2,"0")

const minutes=Math.floor((timeInSec%3600)/60).toString().padStart(2,"0")

const secounds=(timeInSec%60).toString().padStart(2,"0");
  return (
    <div>
      <h1>{hours}:{minutes}:{secounds}</h1>
      {isTimerRunning ? <button onClick={handlePause}>PAUSE</button>:<button onClick={handlePlay}>PLAY</button>}
      <button onClick={handleLap}>LAP</button>
      <button onClick={handleReset}>Reset</button>
      {laps.map((elem,ind)=>
      <div key={ind}>
        <h1>{elem}</h1>
        </div>
      )}
    </div>
  )
}

export default App
