import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import RenewLicense from "./pages/RenewLicense";
import Fines from "./pages/Fines";
import VehicleRegistration from "./pages/VehicleRegistration";
import Payments from "./pages/Payments";
import TransactionHistory from "./pages/TransactionHistory";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/renewLicense" element={<RenewLicense />} />
        <Route path="/fines" element={<Fines />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/VehicleRegistration" element={<VehicleRegistration />} />
        <Route path="/TransactionHistory" element={<TransactionHistory />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
