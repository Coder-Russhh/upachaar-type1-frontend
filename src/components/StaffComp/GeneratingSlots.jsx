import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom"

const GeneratingSlots = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {doctorId} = useParams();

  
  const handleGenerateSlots = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`/api/live-appointments/generate-slots/${doctorId}`);
      console.log(response.data); 
      setLoading(false);
    } catch (error) {
      console.error('Error generating slots:', error);
      setError('Error generating slots');
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 m-4">
      <h2 className="text-2xl font-bold mb-4">Generate Appointment Slots</h2>
      <button
        onClick={handleGenerateSlots}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Slots'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default GeneratingSlots;
