import React, {useState, useEffect} from 'react';
import './PatientInfoTable.css';
import {BsPencil} from 'react-icons/bs';

const PatientInfoTable = () => {
  const [appoints, setAppoints] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setAppoints(data.result));
  }, [])
  console.log(appoints)
    return (
      <div className="patientInfoTable">
        <div className="patientTable-title">
          <h4>Recent Appointment</h4>
          <div className="appoint-date-choose">
            <input type="date" />
          </div>
        </div>
        <table className="pt-table table table-hover">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Prescription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appoints &&
              appoints.map((appoint, index) => (
                <tr key={appoint._id}>
                  <td>0{index}</td>
                  <td>{appoint.date}</td>
                  <td>{appoint.selectTime}</td>
                  <td>{appoint.name}</td>
                  <td>{appoint.number}</td>
                  <td>
                    <button className="view-btn">View</button>
                  </td>
                  <td>
                    <button className="pending-btn">Pending</button>
                    <span className="action-btn">
                      <BsPencil />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
};

export default PatientInfoTable;