import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCar, FaPlus, FaTrash, FaUser, FaClipboardList, FaCreditCard, FaHistory, FaCog, FaSignOutAlt, FaExclamationTriangle } from "react-icons/fa";
import "../css/VehicleRegistration.css";

const VehicleRegistration = () => {
  const [showForm, setShowForm] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [vehicleData, setVehicleData] = useState({
    model: "",
    year: "",
    plateNumber: "",
    color: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const addVehicle = (e) => {
    e.preventDefault();
    if (!vehicleData.model || !vehicleData.year || !vehicleData.plateNumber || !vehicleData.color) {
      alert("Please fill in all fields");
      return;
    }
    setVehicles([...vehicles, { ...vehicleData, id: Date.now() }]);
    setVehicleData({ model: "", year: "", plateNumber: "", color: "" });
    setShowForm(false);
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
  };

  return (
    <div className="dashboard-container">
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

      <Container className="vehicle-container mt-4">
        <Card className="p-4 shadow-sm">
          <h3 className="text-center mb-4"><FaCar /> My Vehicles</h3>

          <div className="text-center mb-3">
            <Button variant="primary" onClick={() => setShowForm(!showForm)}>
              <FaPlus /> Add Vehicle
            </Button>
          </div>

          {showForm && (
            <Card className="p-3 mt-3 vehicle-form">
              <h5 className="text-center">Register New Vehicle</h5>
              <Form onSubmit={addVehicle}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="vehicleModel">
                      <Form.Label>Vehicle Model</Form.Label>
                      <Form.Control type="text" name="model" placeholder="Toyota Corolla" value={vehicleData.model} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="vehicleYear">
                      <Form.Label>Year</Form.Label>
                      <Form.Control type="number" name="year" placeholder="2022" value={vehicleData.year} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="plateNumber">
                      <Form.Label>Plate Number</Form.Label>
                      <Form.Control type="text" name="plateNumber" placeholder="ABC-1234" value={vehicleData.plateNumber} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="vehicleColor">
                      <Form.Label>Color</Form.Label>
                      <Form.Control type="text" name="color" placeholder="Red" value={vehicleData.color} onChange={handleInputChange} />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button variant="success" className="mt-3 w-50" type="submit">Submit</Button>
                </div>
              </Form>
            </Card>
          )}

          <h5 className="mt-4">Registered Vehicles</h5>
          {vehicles.length === 0 ? (
            <p className="text-center">No vehicles registered yet.</p>
          ) : (
            <ul className="list-group">
              {vehicles.map(vehicle => (
                <li key={vehicle.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {vehicle.model} - {vehicle.plateNumber} ({vehicle.color})
                  <Button variant="danger" size="sm" onClick={() => deleteVehicle(vehicle.id)}>
                    <FaTrash /> Delete
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default VehicleRegistration;
