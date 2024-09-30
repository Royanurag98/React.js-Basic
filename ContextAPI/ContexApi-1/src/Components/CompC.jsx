import React from 'react'
import { useContext } from 'react'
import { nameContext,ageContext } from '../App'

function CompC() {
    const Name=useContext(nameContext)
    const Age=useContext(ageContext)
  return (
    <div>
        <h1>Use context API for passing the data globally</h1>
      <h2>Hello Everyone!</h2>
       <h3>My Name is {Name}</h3>
       <h4>And i am {Age} year old</h4>
    </div>
  )
}

export default CompC
