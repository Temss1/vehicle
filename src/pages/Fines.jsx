import React, { useState } from "react";
import { Container, Card, Table, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCar, FaUser, FaClipboardList, FaCreditCard, FaHistory, FaCog, FaSignOutAlt, FaExclamationTriangle } from "react-icons/fa";
import "../css/Fines.css";

const generateRandomFines = () => {
  const states = [
    "Lagos", "Abuja", "Kano", "Rivers", "Enugu", "Ogun", "Kaduna", "Delta", "Benue", "Ekiti",
    "Ondo", "Osun", "Anambra", "Borno", "Cross River", "Edo", "Gombe", "Imo", "Jigawa", "Kebbi",
    "Kogi", "Kwara", "Niger", "Plateau", "Sokoto", "Taraba", "Yobe", "Zamfara", "Bayelsa", "Nasarawa",
    "Adamawa", "Ebonyi", "Bauchi", "Akwa Ibom", "Abia"
  ];
  const offenses = [
    "Over-speeding", "Wrong Parking", "No Seatbelt", "Expired License", "Illegal U-turn",
    "Traffic Light Violation", "Drunk Driving", "Reckless Driving", "Driving Without Papers"
  ];
  
  return Array.from({ length: 6 }, () => ({
    id: Math.floor(Math.random() * 10000),
    plateNumber: `ABC-${Math.floor(Math.random() * 999)}-XYZ`,
    state: states[Math.floor(Math.random() * states.length)],
    offense: offenses[Math.floor(Math.random() * offenses.length)],
    amount: Math.floor(Math.random() * 50000) + 5000,
    status: Math.random() > 0.5 ? "Paid" : "Unpaid"
  }));
};

const Fines = () => {
  const [fines, setFines] = useState(generateRandomFines());

  const handlePayFine = (id) => {
    setFines(fines.map(fine => 
      fine.id === id ? { ...fine, status: "Paid" } : fine
    ));
    alert("Fine paid successfully!");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="text-center pt-3">RoadPass</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="text-white"><FaCar /> Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/vehicleregistration" className="text-white"><FaClipboardList /> My Vehicles</Nav.Link>
          <Nav.Link as={Link} to="/renewlicense" className="text-white"><FaCar /> Renew License</Nav.Link>
          <Nav.Link as={Link} to="/fines" className="text-white active"><FaExclamationTriangle /> Fines</Nav.Link>
          <Nav.Link as={Link} to="/payments" className="text-white"><FaCreditCard /> Payments</Nav.Link>
          <Nav.Link as={Link} to="/transactionhistory" className="text-white"><FaHistory /> Transaction History</Nav.Link>
          <Nav.Link as={Link} to="/settings" className="text-white"><FaCog /> Settings</Nav.Link>
          <Nav.Link as={Link} to="/logout" className="text-white"><FaSignOutAlt /> Logout</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <Container className="fines-container">
          <Card className="fines-card p-4 shadow-sm">
            <div className="fines-header text-center">
              <h3 className="text-primary text-center text-bold">Fines & Penalties</h3>
            </div>

            <Table className="fines-table">
              <thead>
                <tr>
                  <th>Plate Number</th>
                  <th>State</th>
                  <th>Offense</th>
                  <th>Amount (₦)</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {fines.map((fine) => (
                  <tr key={fine.id}>
                    <td>{fine.plateNumber}</td>
                    <td>{fine.state}</td>
                    <td>{fine.offense}</td>
                    <td>{fine.amount}</td>
                    <td>
                      <span className={`fine-status ${fine.status === "Paid" ? "status-paid" : "status-unpaid"}`}>
                        {fine.status}
                      </span>
                    </td>
                    <td>
                      {fine.status === "Unpaid" ? (
                        <Button className="pay-now-btn" onClick={() => handlePayFine(fine.id)}>
                          Pay Now
                        </Button>
                      ) : (
                        <span className="text-success">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Fines;
