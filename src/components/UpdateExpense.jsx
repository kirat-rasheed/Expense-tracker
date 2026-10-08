import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useContext } from 'react'
import { MainContext } from '../context/MainContextApi'
import Swal from 'sweetalert2'

export default function UpdateEXpense({ data }) {
  let [isOpen, setIsOpen] = useState(false)
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
        
        }
  
        const new_expenses= allExpense.map((cur,i)=>{
            if(cur.id == data.id){
                return{
                    ...cur,
                    ...exp
                }
            }
            return cur
        })
         
    
  
        setAllExpense(new_expenses)
        localStorage.setItem("expense",JSON.stringify(new_expenses))
  
        Swal.fire({
          title: 'Success',
          text: 'Expense updated successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        close()
      } catch (error) {
        console.log(error)
      }
    }

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
    
      <button onClick={open} className='px-3 py-1 rounded bg-orange-500 text-white '>
        Update
        </button>
       

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl border bg-white p-6 shadow-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="div" className="text-base/7 font-medium text-black flex items-center justify-between">
               <h3> Update Expense</h3>
               <button onClick={close}>X</button>
              </DialogTitle>
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
                    defaultValue={data.price}
                    placeholder='Enter the price'
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='description' className='block text-gray-700  font-bold mb-3 underline'>Description</label>
                  <textarea
                    id='description'
                    name='description'
                    required
                    defaultValue={data.description}
                    className='w-full py-2 border border-gray-400 rounded px-3 outline-none'>
                  </textarea>
                </div>

                <div className='mb-3'>
                  <label htmlFor='purpose' className='block text-gray-700  font-bold mb-3 underline'>Purpose</label>
                  <select
                    defaultValue={data.purpose}
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
                  <button className='w-full py-3 bg-indigo-500 rounded-md text-white active:bg-indigo-400'>Edit Expense</button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}