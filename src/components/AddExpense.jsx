import React, { useContext,useState } from 'react'
import { MainContext } from '../context/MainContextApi'
import Swal from 'sweetalert2'

const AddExpense = () => {
  const [isHide, setIsHide] = useState(true)
  const {allExpense, setAllExpense} = useContext(MainContext)

  const onSubmitHandler = (event) => {
    try {
      event.preventDefault()

      const formData = new FormData(event.target)
      const price = Number(formData.get('price') || 0)
      const description = String(formData.get('description') || '')
      const purpose = String(formData.get('purpose') || '')

      if (price <= 0 || !description || !purpose) {
        alert('Please fill all the fields')
        return
      }

      const exp = {
        price,
        description,
        purpose,
        created_at: new Date(),
        id: Date.now()
      }

      const new_expenses=[
        ...allExpense,
        exp
      
      ]

      setAllExpense(new_expenses)
      localStorage.setItem("expense",JSON.stringify(new_expenses))

      Swal.fire({
        title: 'Success',
        text: 'Expense Added successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      })
      event.target.reset()
      setIsHide(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex justify-end p-5'>
        <button
          onClick={() => setIsHide(!isHide)}
          className='px-3 py-2 bg-indigo-500 rounded text-white '
        >
          {isHide ? 'Add +' : 'Close X'}
        </button>
      </div>

      {!isHide && (
        <div className='p-10'>
          <form onSubmit={onSubmitHandler}>
            <div className='mb-3'>
              <label htmlFor='price' className='block text-gray-700  font-bold mb-3 underline'>
                Price (in rupees)
              </label>
              <input
                id='price'
                name='price'
                type='number'
                className='w-full py-2 border border-gray-400 rounded px-3 outline-none '
                placeholder='Enter the price'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='description' className='block text-gray-700  font-bold mb-3 underline'>Description</label>
              <textarea
                id='description'
                name='description'
                required

                className='w-full py-2 border border-gray-400 rounded px-3 outline-none'>
              </textarea>
            </div>

            <div className='mb-3'>
              <label htmlFor='purpose' className='block text-gray-700  font-bold mb-3 underline'>Purpose</label>

              <select
                className='w-full py-2 border border-gray-400 rounded px-3 outline-none'
                name='purpose'
                id='purpose'
                required
              >
                <option value=''>Select purpose</option>
                <option value='expense'>Expense</option>
                <option value='income'>Income</option>
              </select>
            </div>

            <div className='mb-3'>
              <button className='w-full py-3 bg-indigo-500 rounded-md text-white active:bg-indigo-400' >Add Expense</button>

            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default AddExpense
