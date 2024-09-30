import React from 'react'
import { ThemContext } from './ThemContext'
import { useState } from 'react'

function ThemContextProvider(props) {

    const [Them, setThem]=useState('light')
   
  return (
    <>
    <ThemContext.Provider value={{Them, setThem}}>
          {props.children}
    </ThemContext.Provider>
    </>
  )
}

export default ThemContextProvider
