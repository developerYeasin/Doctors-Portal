import React, { useEffect, useState } from 'react';
import './AvailableAppoint.css'
import AvailAppointBox from './AvailAppointBox';

const AvailableAppoint = ({date}) => {
  const [availAppoint, setAvailAppoint] = useState([]);



  const DateFun = (d) => {
    const newDate = new Date(d);
    return newDate;
  }

  useEffect(() => {
    availAppoint.map((ap) => {
      const nd3 = `${date && `${date.year}/${date.month}/${date.day}`}`;
      const nd = DateFun(nd3);
      const nd1 = DateFun(ap.date);
      const nd2 = DateFun(ap.date2);
      // console.log(nd, nd1, nd2);

      if (nd1 <= nd ) {
        console.log(nd1, nd2);
      }
    });

  }, [availAppoint, date]);


  useEffect(() => {
    fetch('http://localhost:5000/postappoint')
    .then(res => res.json())
    .then(data => setAvailAppoint(data.result))
  }, [])

  const allMonth = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <div>
        <div className="available-date">
          <div className="container">
            <div className="row">
              <h2 className="avail-date-title">
                Available Appointments on{" "}
                {date ? allMonth[date.month - 1] : "February"}{" "}
                {date ? date.day : 7}, {date ? date.year : 2022}
              </h2>
            </div>
            <div className="row">
              {availAppoint &&
                availAppoint.map((appoint) => (
                  <AvailAppointBox appoint={appoint} key={appoint._id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default AvailableAppoint;