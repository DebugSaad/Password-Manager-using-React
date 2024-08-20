import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-4 h-18">
        <div className="logo font-bold text-2xl">
        <span className="text-green-700">&lt;</span>  
          Pass
         <span className="text-green-700">OP/&gt;</span> 
          </div>
      {/* <ul className='flex gap-4'>
        <a className='hover:font-bold w-20 transition-all' href='/'>Home</a>
        <a className='hover:font-bold w-20 transition-all' href='/about'>About</a>
        <a className='hover:font-bold w-20 transition-all' href='/contact'>Contact</a>
      </ul> */}
      <button className='text-white bg-green-700 px-4 py-2 flex justify-center items-center gap-3 rounded-lg hover:bg-green-600 transition-all ring-1 ring-white'>
        <img className='w-5 invert' src="icons/github.svg" alt="github logo" />
        <span className='font-semibold'>GitHub</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
