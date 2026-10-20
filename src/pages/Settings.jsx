import React from "react";
import { Container, Row, Col, Card, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCar, FaClipboardList, FaCreditCard, FaHistory, FaCog, FaSignOutAlt, FaUser, FaExclamationTriangle } from "react-icons/fa";
import "../css/Settings.css";

const Settings = () => {
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

      {/* Main Profile Content */}
      <div className="profile-content">
        <Container className="profile-container mt-4">
          <Card className="p-4 shadow-sm">
            <h4>Account Settings</h4>

            {/* Avatar Section Below Heading */}
            <div className="text-center mb-3">
              <FaUserCircle size={120} className="profile-icon" />
              <div className="mt-2">
                <Button variant="primary" className="me-2">Upload New</Button>
                <Button variant="danger">Delete</Button>
              </div>
            </div>

            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="mobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile number" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <div>
                      <Form.Check inline type="radio" label="Male" name="gender" />
                      <Form.Check inline type="radio" label="Female" name="gender" />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" className="mt-3">Save Changes</Button>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Settings;
