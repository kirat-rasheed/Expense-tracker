import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../context/MainContextApi'
import ExpenseCard from './ExpenseCard'


const ListExpense = () => {
  const {allExpense} = useContext(MainContext)
  return (
    <>
    <table className='w-full border table-auto my-10 py-3'>
      <thead>
      <tr>

        <th className='border text-zinc-600 border-gray-300'>no</th>
        <th className='border text-zinc-600 border-gray-300'>description</th>
        <th className='border text-zinc-600 border-gray-300'>Price</th>
        <th className='border text-zinc-600 border-gray-300'>Purpose</th>
        <th className='border text-zinc-600 border-gray-300'>Action</th>
      </tr>
    </thead>
      <tbody>
        {
          allExpense && allExpense.length > 0 ? <>
          {
            allExpense.map((cur,i)=>{
              return <ExpenseCard data={cur} key={i} no={i+1}/>
          })
        }
          </>:<></>
}
      </tbody>
    </table>
    </>
  )
}

export default ListExpense
