import React from 'react'
import Navbar from './components/Navbar'
import AddExpense from './components/AddExpense'
import AllExpense from './components/AllExpense'
import ListExpense from './components/ListExpense'

const App = () => {
  return (
    <>
      <Navbar />
      <AddExpense />
      <AllExpense />
      <ListExpense />
    </>
  )
}

export default App
