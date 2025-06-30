import { useState } from 'react'
import './App.css'

const App=()=>{
  const [editIndex,setEditIndex]=useState(-1);
  console.log(editIndex);
   const [fruits,setFruits]=useState([
      {
        name:"kiwi",
        color:"green",
        price:600,
      },
      {
        name:"banana",
        color:"yellow",
        price:600,
      },
      {
        name:"mango",
        color:"orange",
        price:600,
      },
      {
        name:"Apple",
        color:"red",
        price:600,
      }
    ])
  return(
    <div>
        {
          fruits.map((elem,ind)=>{
            if(editIndex===ind){
              return (
                  <div>
                    <h1>Hello!</h1>
                  </div>
              )
            }
            else{
              return(
                <div key={ind} style={{backgroundColor:elem.color}}>
                <h3>name: {elem.name} color: {elem.color} price: {elem.price}</h3>
                <button onClick={()=>{
                  setEditIndex(ind);
                }}>Edit</button>
              </div>
              )}})}
    </div>
  );
};

export default App