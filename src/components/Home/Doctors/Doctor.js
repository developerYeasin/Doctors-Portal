import React from 'react';

const Doctor = ({ doctor }) => {
  
  // console.log(doctor.image && doctor.image.img);
  return (
    <div className="col-md-4 text-center">
      {doctor.image ? (
        <img
          src={` data:image/jpeg;charset=utf-8;base64,${doctor.image.img}`}
          alt=""
          className="w-100"
          style={{ height: "300px" }}
        />
      ) : (
        <img
          src={`http://localhost:5000/${doctor.img}`}
          alt=""
          className="w-100"
          style={{ height: "300px" }}
        />
      )}
      <h3>{doctor.name}</h3>
      <h6>{doctor.email}</h6>
    </div>
  );
};

export default Doctor;