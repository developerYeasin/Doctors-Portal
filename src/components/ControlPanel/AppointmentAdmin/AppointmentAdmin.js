import React, { useState, useEffect, useContext } from "react";
import ControlPanel from '../SideBar/ControlPanel';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { UserContext } from './../../../App';

const AppointmentAdmin = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const day = new Date();
  const newDay = {
    day: day.getDate(),
    month: day.getMonth() + 1,
    year: day.getFullYear(),
  };
  const [selectedDay, setSelectedDay] = useState(newDay); 
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booking/bydate", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({date: selectedDay, email: loggedInUser.email}),
    })
      .then((res) => res.json())
      .then((data) => setPatients(data.result));
  }, [loggedInUser.email, selectedDay]);

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <ControlPanel />
            <div className="col-md-8 ms-auto me-5">
              <h1>Appointment</h1>
              <div className="row">
                <div className="col-md-5">
                  <Calendar
                    className="appoint-calender"
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                  />
                </div>
                <div className="col-md-7">
                  <h1>that day have patients {patients.length}</h1>
                  <ul>
                    {patients &&
                      patients.map((patient) => (
                        <li>
                          {patient.name},{patient.email}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppointmentAdmin;