
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

  const handleClick=()=>{
    state((prev)=>{ 
      const newVal=prev+1;
      localStorage.setItem("counter-value",newVal)
      return newVal;
      });
        console.log(text);
  }

  return(
      <div>
        <p>Hello World</p>
        <button onClick={handleClick}>click Me</button>
        <h1>{text}</h1>
      </div>
  );
};

export default App;