
import { useState } from 'react';// it returns array
import './App.css'

//const [moniter,remote]=useDtate(""); moniter which returns value , remote returns snd runs function
//function re-run ==> component re-rendering
//react re-render's component Rither on "state" change OR on "props" change

//hook ==> function given to use by react
const App=()=>{ 

  const [text,state]=useState("");
  const handleSearch=(e)=>{
    state(e.target.value);
    console.log(text)
  }

  return(
      <div>
        <p>Hello World</p>
        <input type='text' onKeyUp={handleSearch}></input>
        <h1>{text}</h1>
      </div>
  );
};

export default App;