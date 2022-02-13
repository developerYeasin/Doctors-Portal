import React from 'react';
import {Link} from 'react-router-dom';
import './ControlPanel.css';
import { GrApps } from "react-icons/gr";
import {AiOutlineCalendar} from 'react-icons/ai';
import { FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const ControlPanel = () => {
    return (
      <div className="col-md-3 admin-panel-side-bar">
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
            <Link to="/postAppoint">
              <span>
                <GrApps />
              </span>
              Post Appoint
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
          <li>
            <Link to="/dashboard">
              <span>
                <FiSettings />
              </span>
              Setting
            </Link>
          </li>
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