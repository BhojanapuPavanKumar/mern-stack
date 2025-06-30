import { useState } from 'react'

import './App.css'

const App=()=>{
  useState()
  const getData=()=>{
    const response=fetch("https://dummyjson.com/users")
    console.log(response)
  };
  getData()
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
