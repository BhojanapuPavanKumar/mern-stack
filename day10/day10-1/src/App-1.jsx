
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
  const [editIndex,setEditIndex]=useState(-1);
  const [fruits,setFruits]=useState(Fruits);

  const handleSubmit=(e,ind)=>{
    e.preventDefault();
    console.log(e)
    setFruits((prev)=>{
        const temp = [...prev];
        temp[ind].name = e.target.fruitName.value;
        return temp;
    })
    setEditIndex(-1)
  }

  return(
    <div>
      {
        fruits.map((elem,ind)=>{
          return (
            <div>
              {editIndex!==ind?(
            <div key={ind}>
              <h4>{elem.name}</h4>
              <h4>{elem.color}</h4>
              <h4>{elem.price}</h4>
              <button onClick={()=>{setEditIndex(ind)}}>Edit</button>
            </div> 
    
            ):(
              <div>
                <form onSubmit={(e)=>{
                    handleSubmit(e,ind);
                }} onReset={()=>setEditIndex(-1)}>
                  <input type='text' name='fruitName'/>
                  <button>Update</button>
                  <button type='reset'>Cancel</button>
                </form>
              </div>
            )}
            </div>
            )
      })
      }
  </div>
  )
};


export default App
