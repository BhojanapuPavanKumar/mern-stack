import { useState } from 'react'

import './App.css'

const App=()=>{
  useState()
  // const getData=()=>{
  //   const response=fetch("https://dummyjson.com/users")//1) is anything pending 2) is call stack is empty
  //   console.log(response)
  //   response.then((resp)=>{
  //     console.log("success",resp);
  //     return resp.json()
  //   }).catch((err)=>{
  //     console.log("error",err.message);
  //   }).then((data)=>{
  //     console.log("data",data)
  //   })
  // };
  const getData = async()=>{
    console.log("inside data!")
    const response=await fetch("https://dummyjson.com/users")
    const data = await response.json();
    console.log("data-->>",data)
  }
  console.log("-- before getdata call--")
  getData()
  console.log("getData");

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
