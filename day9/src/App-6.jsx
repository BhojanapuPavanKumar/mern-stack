
import { useState } from 'react';// it returns array
import './App.css'

//const [moniter,remote]=useDtate(""); moniter which returns value , remote returns snd runs function
//function re-run ==> component re-rendering
//react re-render's component Rither on "state" change OR on "props" change

//hook ==> function given to use by react
const App=()=>{ 

  let [text,state]=useState(()=>{
    const val=localStorage.getItem("counter-value")
    return val? parseInt(val):0;
  });
      console.log("text",text);

  const handleIncrement=()=>{
    state((prev)=>{ 
      const newVal=prev+1;
      localStorage.setItem("counter-value",newVal)
      return newVal;
      });
  }
  const handleDecrement=()=>{
      state((prev)=>{
        const newVal=prev-1;
        localStorage.setItem("counter-value",newVal);
        return newVal;
      });
  }

  const handleReset=()=>{
    state(0);
    localStorage.setItem("counter-value",0);
  }

  return(
      <div>
        <p>Hello World</p>
        <button onClick={handleDecrement}>--</button>
        <button onClick={handleIncrement}>++</button>
        <button onClick={handleReset}>Reset</button>
        <h1>{text}</h1>
      </div>
  );
};

export default App;