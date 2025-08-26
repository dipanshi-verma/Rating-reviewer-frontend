import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();
  const API_URL = 'http://localhost:3000';

  // Check for an existing token on app load
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserProfile(response.data);
    } catch (err) {
      console.error('Failed to fetch user profile:', err);
      handleLogout();
    }
  };

  const handleLogin = (token, profile) => {
    localStorage.setItem('access_token', token);
    setIsLoggedIn(true);
    setUserProfile(profile);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    setUserProfile(null);
    navigate('/login');
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/register' element={<Register />} />
        {isLoggedIn && (
          <Route
            path='/dashboard'
            element={<Dashboard userProfile={userProfile} onLogout={handleLogout} />}
          />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
