import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        This is gonna be the Home Page.
      </h1>
      
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        This is a web application that allows users to submit ratings for stores 
        registered on the platform. The ratings should range from 1 to 5.
      </p>
    </div>
  )
}

export default Home
