import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md py-4 flex justify-around items-center'>
      <div className='text-2xl font-bold p-3'>Luxe<span className='text-purple-500'>Store</span></div>
      <div className='flex gap-8'>
        <Link to='/' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Home</Link>
        <Link to='/shop' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Shop</Link>
        <Link to='/categories' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Categories</Link>
        <Link to='/deals' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Deals</Link>
        <Link to='/cart' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors'>Cart</Link>
        <button className='bg-slate-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-slate-800 transition-colors font-outfit'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar