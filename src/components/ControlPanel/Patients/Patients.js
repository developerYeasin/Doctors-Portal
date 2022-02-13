import React from 'react';
import ControlPanel from '../SideBar/ControlPanel';

const Patients = () => {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <ControlPanel />
            <div className="col-md-8">
              <h1>Patients</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Patients;