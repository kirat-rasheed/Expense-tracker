import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-indigo-400'>
        <nav className='lg:w-[80%] mx-auto flex items-center justify-between py-2'>
            <a href='' className='text-2xl font-extrabold text-white white-shadow-2xs'>Expenci</a>
            <ul className='flex items-center justify-center gap-x-3 text-white font-medium'>
                <li>
                    <a href='#'>home</a>
                </li>
                <li>
                    <a href='about'>about</a>
                </li>
                <li>
                    <a href='contact'>contact</a>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar
