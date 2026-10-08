import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../context/MainContextApi'

const AllExpense = () => {

    const {allExpense} = useContext(MainContext)
    const totalMoney = allExpense.length> 2 ? (
        allExpense.reduce((pre,cur)=>{
            return pre+parseInt(cur.price)
        })
    ):allExpense.length==1? allExpense[0].price:0
    const calculateIncome = (purpose) => {
          if(allExpense.length <= 0){
            return 0
          }

        const expenses = allExpense.filter((cur,i)=>cur.purpose==purpose).map((cur)=>parseInt(cur.price))
        if(expenses.length <= 1){
            return expenses[0]
        }

        const price = expenses.reduce((pre,cur) => pre+cur)
        return price

    }


  return (
    <>
        <div className='grid grid-cols-2 p-7' >
            <div className='w-[95%] lg:w-[80%] max-auto py-5 px-3 rounded border border-gray-300 '>
                <p className=' text-green-600 font-bold'>Income</p>
                <p className='text-3xl font-bold text-green-600 text-end'>&#8377; {calculateIncome('income')} </p>
            </div>
            <div className='w-[95%] lg:w-[80%] max-auto py-5 px-3 rounded border border-gray-300'>
                <p className=' text-red-600 font-bold'>Expense</p>
                <p className='text-3xl font-bold text-red-600 text-end'>&#8377; {calculateIncome('expense')}</p>
            </div>
            <div className='mt-10 col-span-2 py-5 px-3 rounded border border-gray-300'>
             <p className='font-bold text-2xl text-red-500'>Total <span className='font-bold text-2xl text-green-500'>Balance</span></p>
             <p className='text-end font-semibold text-2xl'>&#8377;{totalMoney} </p>

            </div>
        </div>  
    </>
  )
}

export default AllExpense
