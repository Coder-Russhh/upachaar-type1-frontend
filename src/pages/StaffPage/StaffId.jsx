import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HomeDoctor1 from "../../assets/HomeImg/HomeDoctor1.jpg";

const StaffId = () => {
  const [staffId, setStaffId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/doctors/staffId', { staffId });
      const data = response.data;
      const id = data.data._id;
      if (data.success === true) {
        navigate(`/staff/sign-in/${id}`);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching staff data:', error);
      setError('Error fetching staff data');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-cover" style={{ backgroundImage: `url(${HomeDoctor1})` }}>
      <div className="w-full md:w-1/3 bg-color border-2 border-white text-white bg-opacity-80 rounded-lg shadow-lg mx-8">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Enter Your Staff ID</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="staffId" className="block text-lg font-semibold mb-2">Staff ID:</label>
              <input
                type="text"
                id="staffId"
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                className="border rounded-md px-3 py-2 w-full text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default StaffId;
