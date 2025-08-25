import React from 'react'

const Register = () => {
  return (
   <>
   {/* registration page for normal user  */}
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 py-12">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Enter your name" />
                </div>
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
                        <option value="user">Normal User</option>
                        <option value="admin">Store Owner</option>
                        <option value="admin">System Administrator</option>
                    </select>

                </div>
                <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200" type="submit">Register</button>
            </form>
            </div>
            </div>
   </>
  )
}

export default Register