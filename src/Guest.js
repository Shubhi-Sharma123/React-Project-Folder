import React from 'react'
import { ContextApi } from './App'
function Guest() {
  return (
   <>
   
   <h2>Guest</h2>
   <ContextApi.Consumer>
    {val=><h3>name={val.name} age={val.age} city={val.city}</h3>}
   </ContextApi.Consumer>
   </>
  )
}

export default Guest