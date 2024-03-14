import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PatientHeader from '../../components/PatientComp/PatientHeader';
import {useParams} from "react-router-dom"

const AppointmentRecord = () => {
  const [slots, setSlots] = useState([]);
  const {patientId} = useParams();
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        // Replace 'your_api_url_here' with the actual URL of your API
        const response = await Axios.get(`/api/live-appointments/get-slot/patient/${patientId}`); // Make sure to replace ':patientId' with the actual patientId
        console.log(response.data)
        setSlots(response.data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchSlots();
  }, []);

  return (
    <>
      <PatientHeader/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-semibold mb-6">Appointment Records</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slots.map((slot) => (
            <div key={slot._id} className="bg-gray-200 p-4 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Appointment Details</h2>
              <p><span className="font-semibold">Doctor:</span> {slot.doctor}</p>
              <p><span className="font-semibold">Patient ID:</span> {slot.patientId}</p>
              <p><span className="font-semibold">Patient:</span> {slot.patient}</p>
              <p><span className="font-semibold">Appointment Time:</span> {new Date(slot.appointmentTime).toLocaleString()}</p>
              <p><span className="font-semibold">Average Consultation Time:</span> {slot.averageConsultationTime}</p>
              <p><span className="font-semibold">Date:</span> {slot.date}</p>
              <p><span className="font-semibold">Status:</span> {slot.status}</p>
              <p><span className="font-semibold">Fee:</span> {slot.fee}</p>
              <p><span className="font-semibold">Consultation Mode:</span> {slot.consultationMode}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppointmentRecord;
