
import { useState } from 'react';// it returns array
import './App.css'

//const [moniter,remote]=useDtate(""); moniter which returns value , remote returns snd runs function
//function re-run ==> component re-rendering
//react re-render's component Rither on "state" change OR on "props" change

//hook ==> function given to use by react
const App=()=>{ 

  let [text,state]=useState(0);
      console.log("text",text);

  const handleClick=()=>{
    state(++text);
     state(++text);
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