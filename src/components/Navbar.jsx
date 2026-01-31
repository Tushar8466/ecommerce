import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md py-4 border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full'>
                <div className='text-2xl font-bold font-outfit'>Luxe<span className='text-purple-500'>Store</span></div>
                <div className='flex gap-8 items-center'>
                    <Link to='/' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors font-inter'>Home</Link>
                    <Link to='/shop' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors font-inter'>Shop</Link>
                    <Link to='/categories' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors font-inter'>Categories</Link>
                    <Link to='/deals' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors font-inter'>Deals</Link>
                    <Link to='/cart' className='text-sm uppercase tracking-widest hover:text-purple-400 transition-colors font-inter'>Cart</Link>
                    <Link to='/login' className='bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 font-outfit shadow-sm text-center'>
                        Login
                    </Link>
                    <Link to='/signup' className='px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 font-outfit shadow-sm border border-black/10 hover:text-white text-center'>
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar