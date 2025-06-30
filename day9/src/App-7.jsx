
import { useState } from 'react';// it returns array
import './App.css'

//const [moniter,remote]=useDtate(""); moniter which returns value , remote returns snd runs function
//function re-run ==> component re-rendering
//react re-render's component Rither on "state" change OR on "props" change

//hook ==> function given to use by react
const App=()=>{ 

  let [searchText,setSearchText]=useState(()=>{
    const newval=localStorage.getItem("search-text");
    return newval? newval:"hello";
  });
      console.log("text",searchText);

  const handleSearch=(e)=>{
    localStorage.setItem("search-text",e.target.value)
    setSearchText(e.target.value)
  }

  return(
      <div>
        <p>Hello World</p>
        <input type='text' value={searchText} onChange={handleSearch}/>
        <h1>{searchText}</h1>
      </div>
  );
};

export default App;