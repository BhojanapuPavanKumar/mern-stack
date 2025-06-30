
import { useState } from 'react';// it returns array
import './App.css'

//const [moniter,remote]=useDtate(""); moniter which returns value , remote returns snd runs function
//function re-run ==> component re-rendering
//react re-render's component Rither on "state" change OR on "props" change

//hook ==> function given to use by react
const App=()=>{ 

 const [arr,setArr]=useState(["kiwi","banana"]);
 console.log("new array==>",arr)

 const handleAddFruit=()=>{
  // arr.push("Mango")
  // console.log("old array==>",arr)
  const oldvalue=[...arr];
  oldvalue.push("Mango")
  setArr(oldvalue)
  setArr((prev)=>{
    const temp=[...prev];
    temp.push("Mango");
    return temp;
  })
 }

 return(
  <div>
  <ul>
    {arr.map((elem)=>(
      <li>{elem}</li>
    ))}
  </ul>
  <button onClick={handleAddFruit}>Add Mango</button>
  </div>
 )
};

export default App;