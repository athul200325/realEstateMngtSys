import React, { createContext, useState } from 'react'
export const addLIstResponseContext =createContext()

const ContextApi = ({children}) => {
    const [addListRespomse,setListsRespomse]=useState()
  return (
    <addLIstResponseContext.Provider value={{addListRespomse,setListsRespomse}}>
        {children}
    </addLIstResponseContext.Provider>
  )
}

export default ContextApi