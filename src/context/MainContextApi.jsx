import React, { createContext,useState } from 'react'

export const MainContext = createContext();

export const MainContextApi = ({children}) => {
    const [allExpense, setAllExpense] = useState([JSON.parse(localStorage.getItem("expense")) || '[]'])
  return (
    <MainContext.Provider value={{allExpense, setAllExpense}}>{children}</MainContext.Provider>
  )
}


