import React from 'react';
import './DashboardDetails.css'
import PatientInfoTable from './PatientInfoTable/PatientInfoTable';

const DashboardDetails = () => {
    return (
      <div>
        <h1>DashboardDetails</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="patient-box">
              <div className="number">
                <span>09</span>
              </div>
              <div className="info">
                <h3>Pending appointments</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-box today-appoint">
              <div className="number">
                <span>09</span>
              </div>
              <div className="info">
                <h3>Pending appointments</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-box total-appoint">
              <div className="number">
                <span>09</span>
              </div>
              <div className="info">
                <h3>Pending appointments</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-box total-patient">
              <div className="number">
                <span>09</span>
              </div>
              <div className="info">
                <h3>Pending appointments</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PatientInfoTable />
          </div>
        </div>
      </div>
    );
};

export default DashboardDetails;