import React, { useState, useRef } from "react";
import Popup from 'reactjs-popup';
import './BookingForm.css';
import Form from './Form';

const BookingForm = ({date}) => {
    const [showForm, setShowForm] = useState(false);
      const ref = useRef();
      // const closeTooltip = () => ref.current.close();

    const handlePopup = () => {
      setShowForm(!showForm);
      console.log("ami valo")
      // closeTooltip();
    }
    console.log(showForm);

  return (
    <Popup
      open={showForm}
      trigger={
        <button onClick={() => handlePopup()} className="primary-btn">
          Book Appointment
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="booking-form">
          <h2 className="booking-form-heading">Teeth Orthodontics</h2>
          <Form date={date} handlePopup={close} />
        </div>
      )}
    </Popup>
  );
};

export default BookingForm;