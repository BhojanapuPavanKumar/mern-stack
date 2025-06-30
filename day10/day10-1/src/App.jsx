
import {useState } from 'react'
import './App.css'


const Fruits=[
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
    ]
const App=()=>{
  const [fruits,setFruits]=useState(Fruits);
  return (
    <div>
      {fruits.map((elem,ind)=>{
        return (
        <div key={ind}>
          <h1>{elem.name}</h1>
          <h1>{elem.color}</h1>
          <h1>{elem.price}</h1>
          <form ></form>
      </div>
      )})
    }
    </div>
  )
};


export default App
