import React from 'react'

import User from './User'
export let ContextApi=React.createContext()
function App() {
  let data={
    name:"amit",
    age:20,
    city:"noida"
  }
  return (
    <>
    <h2>App component</h2>
    <hr/>
    <ContextApi.Provider value={data}>
    <User/>
    </ContextApi.Provider>
    
    </>
  )
}

export default App