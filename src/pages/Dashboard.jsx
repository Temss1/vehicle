import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Table, Navbar, Nav } from 'react-bootstrap';
import { FaCar, FaMoneyBillWave, FaHistory, FaUser, FaClipboardList, FaCog, FaCreditCard, FaSignOutAlt, FaExclamationTriangle } from 'react-icons/fa';
import '../css/Dashboard.css';


const Dashboard = () => {
  const navigate = useNavigate();
    return (
        <div className="dashboard-container d-flex">
            {/* Sidebar */}
            <div className="sidebar  text-white p-3">
                <h4 className="text-center pt-3">RoadPass</h4>
                <Nav className="flex-column">
                    <Nav.Link onClick={() => navigate("/Dashboard")} className="text-white"><FaCar /> Dashboard</Nav.Link>
                    <Nav.Link onClick={() => navigate("/vehicleregistration")} className="text-white"><FaClipboardList /> My Vehicles</Nav.Link>
                    <Nav.Link onClick={() => navigate("/renewlicense")} className="text-white"><FaUser /> Renew License</Nav.Link>
                    <Nav.Link onClick={() => navigate("/fines")} className="text-white"><FaExclamationTriangle /> Fines</Nav.Link>
                    <Nav.Link onClick={() => navigate("/payments")} className="text-white"><FaCreditCard /> Payments</Nav.Link>
                    <Nav.Link onClick={() => navigate("/transactionhistory")} className="text-white"><FaHistory /> Transaction History</Nav.Link>
                    <Nav.Link onClick={() => navigate("/settings")} className="text-white"><FaCog /> Settings</Nav.Link>
                    <Nav.Link onClick={() => navigate("/logout")} className="text-white"><FaSignOutAlt /> Logout</Nav.Link>
                </Nav>
            </div>
            {/* Main Content */}
            <div className="main-content flex-grow-1 p-4">
                <Navbar bg="light" expand="lg" className="mb-4 px-3">
                    <Navbar.Brand href="#home">Vehicle Licensing System</Navbar.Brand>
                </Navbar>
                <Container fluid>
                    <Row className="dashboard-stats">
                        <Col md={4}>
                            <Card className="stat-card text-center p-3">
                                <FaCar className="stat-icon" />
                                <h3>3</h3>
                                <p>Registered Vehicles</p>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="stat-card text-center p-3">
                                <FaMoneyBillWave className="stat-icon" />
                                <h3>&#8358;1,200</h3>
                                <p>Total Fees Paid</p>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="stat-card text-center p-3">
                                <FaHistory className="stat-icon" />
                                <h3>2</h3>
                                <p>Pending Renewals</p>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Card className="p-3">
                                <h2>Recent Transactions</h2>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Vehicle</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#123456</td>
                                            <td>Toyota Corolla</td>
                                            <td>&#8358;20,000</td>
                                            <td><span className="completed">Completed</span></td>
                                            <td>Feb 20, 2025</td>
                                        </tr>
                                        <tr>
                                            <td>#789012</td>
                                            <td>Honda Accord</td>
                                            <td>&#8358;17,000</td>
                                            <td><span className="pending">Pending</span></td>
                                            <td>Feb 25, 2025</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
