import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

function Home() {
    return (
        <div className="relative min-h-screen bg-white">
            <div className="relative h-[90vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/hero-image.png"
                        alt="New Collection"
                        className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                    <div className="max-w-2xl space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20 animate-fade-in">
                            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                            New Spring Collection 2026
                        </div>

                        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl font-outfit leading-tight">
                            Elevate Your <br />
                            <span className="text-purple-400">Daily Essentials</span>
                        </h1>

                        <p className="text-xl text-slate-200 max-w-xl font-inter leading-relaxed">
                            Experience the perfect blend of minimalist design and premium quality. Our new collection is crafted for the modern lifestyle.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/shop"
                                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-xl shadow-black/20 font-outfit"
                            >
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                Shop Collection
                            </Link>

                            <Link
                                to="/categories"
                                className="group inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-8 py-4 text-base font-bold text-white border border-white/30 transition-all hover:bg-white/20 hover:scale-105 active:scale-95 font-outfit"
                            >
                                Explore Categories
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs font-medium text-white/50 uppercase tracking-widest font-inter">Scroll</span>
                        <div className="h-10 w-[2px] bg-gradient-to-b from-white/80 to-transparent rounded-full" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
