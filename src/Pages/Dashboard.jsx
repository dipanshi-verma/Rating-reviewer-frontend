import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const Dashboard = ({ userProfile }) => {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllStores();
  }, []);

  const fetchAllStores = async () => {
    try {
      const response = await axios.get(`${API_URL}/stores`);
      setStores(response.data);
    } catch (err) {
      setError('Failed to fetch stores.');
      console.error(err);
    }
  };

  const handleRateStore = async (storeId, ratingData) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) return setError('You must be logged in to rate a store.');

      await axios.post(
        `${API_URL}/ratings`,
        { storeId, ...ratingData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Rating submitted successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit rating.');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, {userProfile?.email}</h1>
        <p className="text-gray-600">Your role: {userProfile?.role}</p>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Stores</h2>
        {stores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} onRateStore={handleRateStore} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No stores available. Please add some via the admin endpoint.</p>
        )}
      </div>
    </div>
  );
};

const StoreCard = ({ store, onRateStore }) => {
  const [ratingData, setRatingData] = useState({ rating: 5, comment: '' });
  const [showRatingForm, setShowRatingForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRatingData({ ...ratingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRateStore(store.id, ratingData);
    setShowRatingForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{store.name}</h3>
        <p className="text-gray-600 mb-1">{store.address}</p>
      </div>
      <button
        onClick={() => setShowRatingForm(!showRatingForm)}
        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
      >
        {showRatingForm ? 'Hide Form' : 'Rate this Store'}
      </button>

      {showRatingForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={ratingData.rating}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              name="comment"
              value={ratingData.comment}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Rating
          </button>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
