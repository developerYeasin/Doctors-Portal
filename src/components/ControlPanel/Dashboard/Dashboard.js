import React from "react";
import ControlPanel from "../SideBar/ControlPanel";
import DashboardDetails from "./DashboardDetails/DashboardDetails";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <ControlPanel />
          <div className="col-md-8">
            <DashboardDetails/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
