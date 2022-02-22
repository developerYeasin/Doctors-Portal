import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/addADoctor")
          .then((res) => res.json())
          .then((data) => setDoctors(data.result));
    },[])
  return (
    <div className="container">
      <h1 className="text-center"> Doctors</h1>
      <div className="row">
        {doctors &&
          doctors.map((doctor) => <Doctor key={doctor._id} doctor={doctor} />)}
      </div>
    </div>
  );
};
export default Doctors;
