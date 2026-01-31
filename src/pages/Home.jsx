import React from 'react'

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 font-outfit">
                Welcome to LuxeStore
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl font-inter mb-8">
                Your destination for premium products and curated style. Explore our latest collections.
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors font-outfit">
                Shop Latest
            </button>
        </div>
    )
}

export default Home
