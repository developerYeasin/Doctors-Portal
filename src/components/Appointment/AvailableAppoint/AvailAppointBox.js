import React, { useState } from "react";
import BookingForm from "./BookingForm/BookingForm";

const AvailAppointBox = ({appoint}) => {
  return (
    <div className="col-md-4 text-center">
      <div className="avail-appoint-box">
        <h3 className="avail-appoint-box-title">{appoint && appoint.name}</h3>
        <h5 className="avail-appoint-box-date">
          {appoint && appoint.time} - {appoint && appoint.time2}
        </h5>
        <p className="avail-appoint-box-spaces">
          {appoint && appoint.spaces} SPACES AVAILABLE
        </p>
        <BookingForm />
      </div>
    </div>
  );
};

export default AvailAppointBox;
