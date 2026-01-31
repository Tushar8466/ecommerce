import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, ShieldCheck } from 'lucide-react';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreed: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup attempt:', formData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-md w-full space-y-8 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-slate-900 font-outfit">
                        Create Account
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 font-inter">
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-500 transition-colors">
                            Sign in
                        </Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 font-inter mb-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all sm:text-sm font-inter bg-white/50"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 font-inter mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all sm:text-sm font-inter bg-white/50"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 font-inter mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all sm:text-sm font-inter bg-white/50"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="agreed"
                                name="agreed"
                                type="checkbox"
                                required
                                checked={formData.agreed}
                                onChange={handleChange}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-slate-300 rounded transition-colors"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="agreed" className="text-slate-700 font-inter">
                                I agree to the{' '}
                                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 underline underline-offset-4">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 underline underline-offset-4">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all hover:scale-[1.02] active:scale-[0.98] font-outfit"
                        >
                            Start Shopping
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 py-2 text-xs text-slate-500 font-inter">
                        <ShieldCheck className="h-4 w-4 text-green-500" />
                        <span>Secure 256-bit SSL encryption</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
