import React, { useState, useEffect } from "react";
import "./Appointment.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import Navbar from "../Navbar/Navbar";
import AvailableAppoint from "./AvailableAppoint/AvailableAppoint";

const Appointment = () => {
  const day = new Date();
  const newDay = {
    day: day.getDate(),
    month: day.getMonth() + 1,
    year: day.getFullYear(),
  }
     const [selectedDay, setSelectedDay] = useState(newDay); 
     
  return (
    <div>
      <Navbar />
      <div
        className="appoint-header"
        style={{ backgroundImage: `url('./images/chair.png')` }}
      >
        <div className="appoint-header-content">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2 className="appoint-title">Appointment</h2>
                <Calendar
                  className="appoint-calender"
                  value={selectedDay}
                  onChange={setSelectedDay}
                  shouldHighlightWeekends
                />
              </div>
              <div className="col-md-7">
                <div className="appoint-right-img">
                  <img src="./images/chair.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AvailableAppoint date={selectedDay} />
    </div>
  );
};

export default Appointment;
