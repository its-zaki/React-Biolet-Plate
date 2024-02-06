import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../../screens/login/Login'
import AdminDashboard from '../../screens/admin-Dashboard/AdminDashboard'
import Addmission from '../../screens/addmission/Addmission'
import Student from '../../screens/student-Dashboard/StudentDashboard'
const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="addmission" element={<Addmission/>} />
        <Route path="student" element={<Student/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
