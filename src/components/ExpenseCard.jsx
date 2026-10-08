import React, { useContext } from 'react'
import { MainContext } from '../context/MainContextApi'
import Swal from 'sweetalert2'
import UpdateExpense from './UpdateExpense'

const ExpenseCard = ({data,no}) => {
    const {allExpense, setAllExpense} = useContext(MainContext)
    const delExpen =() =>{
        const new_exp = allExpense.filter((cur,i)=> cur.id != data.id)
        setAllExpense(new_exp)
        Swal.fire({
  title: 'Success',
  text: 'Expense deleted successfully',
  icon: 'success',
  confirmButtonText: 'ok'
})
localStorage.setItem("expense",JSON.stringify(new_exp))


    }
  return (
    <tr>
    <td className='border border-gray-300 py-3 px-3'>{no}</td>
    <td className='border border-gray-300 py-3 px-3 font-semibold'>{data.description}</td>
    <td className='border border-gray-300 py-3 px-3'>&#8377;{data.price}</td>
    <td className='border border-gray-300 py-3 px-3 text-center'>
        {data.purpose =='income' && <span className='px-4 py-1 bg-green-100 rounded-full text-green-600'>{data.purpose}</span>}
        {data.purpose =='expense' && <span className='px-4 py-1 bg-red-100 rounded-full text-green-600'>{data.purpose}</span>}
    </td>
    <td className='border border-gray-300 py-3 px-3 '>
      <div className='flex gap-5 items-center justify-center'>
        <button onClick={delExpen} className='px-3 py-1 rounded bg-red-500 text-white '>Delete</button>
        <UpdateExpense   data={data} />
        </div>
    </td>
    </tr>
  )
}

export default ExpenseCard
