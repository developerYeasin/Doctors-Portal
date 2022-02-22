import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './ControlPanel.css';
import { GrApps } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineUserAdd } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { UserContext } from './../../../App';

const ControlPanel = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/addADoctor/isDoctor", {
      method: "POSt",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  },[])
    return (
      <div className="col-md-3 admin-panel-side-bar position-fixed">
        <ul className="side-bar-menu">
          <li>
            <Link to="/dashboard">
              <span>
                <GrApps />
              </span>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/appointmentAdmin">
              <span>
                <AiOutlineCalendar />
              </span>
              Appointment
            </Link>
          </li>
          <li>
            <Link to="/patients">
              <span>
                <FaUserFriends />
              </span>
              Patients
            </Link>
          </li>
          <li>
            <Link to="/prescriptions">
              <span>
                <FiSettings />
              </span>
              Prescriptions
            </Link>
          </li>
          {isDoctor && (
            <div>
              <li>
                <Link to="/postAppoint">
                  <span>
                    <GrApps />
                  </span>
                  Post Appoint
                </Link>
              </li>
              <li>
                <Link to="/adddoctors">
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Add Doctors
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <span>
                    <FiSettings />
                  </span>
                  Setting
                </Link>
              </li>
            </div>
          )}
        </ul>
        <div className="logout-btn">
          <button>
            <span>
              <FiLogOut />
            </span>
            Log out
          </button>
        </div>
      </div>
    );
};

export default ControlPanel;