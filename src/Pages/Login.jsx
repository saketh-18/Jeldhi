import React from "react";
import Navbar from "../Components/Navbar";

export default function LoginPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-slate-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-2 text-center text-gray-500">Login</h2>
        <p className="text-gray-500 text-center mb-6">Welcome back! Please log in to your account.</p>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600 text-sm">Remember Me</span>
            </label>
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Login
          </button>
        </form>

        {/* Social Login (Optional) */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Or login with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg">Google</button>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg">Facebook</button>
          </div>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
    </>
  );
}
