import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCar, FaUser, FaClipboardList, FaCreditCard, FaHistory, FaCog, FaSignOutAlt, FaExclamationTriangle } from "react-icons/fa";
import "../css/Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Clear authentication token
    localStorage.removeItem("userData"); // Remove stored user data
    alert("You have been logged out.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar (Same as User Dashboard) */}
      <div className="sidebar">
        <h4 className="text-center pt-3">Road Pass</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="text-white"><FaCar /> Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/vehicleregistration" className="text-white"><FaClipboardList /> My Vehicles</Nav.Link>
          <Nav.Link as={Link} to="/fines" className="text-white active"><FaExclamationTriangle /> Fines</Nav.Link>
          <Nav.Link as={Link} to="/renewlicense" className="text-white"><FaCar /> Renew License</Nav.Link>
          <Nav.Link as={Link} to="/payments" className="text-white"><FaCreditCard /> Payments</Nav.Link>
          <Nav.Link as={Link} to="/history" className="text-white"><FaHistory /> Transaction History</Nav.Link>
          <Nav.Link as={Link} to="/settings" className="text-white"><FaCog /> Settings</Nav.Link>
          <Nav.Link as={Link} to="/logout" className="text-white active"><FaSignOutAlt /> Logout</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <Container className="logout-container">
          <Card className="logout-card p-4 mt-2 shadow-sm">
            <h3 className="text-center text-danger">Logout</h3>
            <p className="text-center">Are you sure you want to log out?</p>
            <Button 
              variant="danger" 
              className="mt-3 w-100"
              onClick={handleLogout}
            >
              Confirm Logout
            </Button>
            <Button 
              variant="secondary" 
              className="mt-2 w-100"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </Button>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Logout;
