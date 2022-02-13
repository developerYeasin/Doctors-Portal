import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './BookingForm.css';
import Form from './Form';

const BookingForm = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <Popup
      trigger={
        <button onClick={() => setShowForm(!showForm)} className="primary-btn">
          Book Appointment
        </button>
      }
      modal
    >
      <div className="booking-form">
        <h2 className="booking-form-heading">Teeth Orthodontics</h2>
        <Form />
      </div>
    </Popup>
  );
};

export default BookingForm;