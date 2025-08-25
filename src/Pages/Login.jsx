import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>

    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 py-12">
        {/* role based login form */}
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input className="w-full px-3 py-2 border rounded" type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="role">Role</label>
                    <select className="w-full px-3 py-2 border rounded" id="role">
                        <option value="user">System Administrator</option>
                        <option value="admin">Normal User</option>
                        <option value="admin">Store Owner</option>
                    </select>
                </div>
                <div className="mb-4 text-right">
                    <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot Password?</a>
                </div>
                <div className="mb-4 flex items-center">
                    new user? <Link to="/register" className="ml-2 text-sm text-indigo-500">Register here</Link>
                </div>
                <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200" type="submit">Login</button>
            </form>
            </div>
           
    </div>
    </>
  )
}

export default Login