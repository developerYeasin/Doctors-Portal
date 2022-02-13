import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import ControlPanel from "./components/ControlPanel/SideBar/ControlPanel";
import Dashboard from "./components/ControlPanel/Dashboard/Dashboard";
import DentalServices from "./components/DentalServices/DentalServices";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NoPage from "./components/NoPage/NoPage";
import Reviews from "./components/Reviews/Reviews";
import AppointmentAdmin from "./components/ControlPanel/AppointmentAdmin/AppointmentAdmin";
import Patients from "./components/ControlPanel/Patients/Patients";
import Prescriptions from "./components/ControlPanel/Prescriptions/Prescriptions";
import PostAppoint from "./components/ControlPanel/PostAppoint/PostAppoint";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="dental-services" element={<DentalServices />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="appointmentAdmin" element={<AppointmentAdmin />} />
        <Route path="patients" element={<Patients />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="postAppoint" element={<PostAppoint />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
