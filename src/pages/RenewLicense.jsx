import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaCar, FaUser, FaClipboardList, FaCreditCard, FaHistory, FaCog, FaExclamationTriangle, FaSignOutAlt,} from "react-icons/fa";
import "../css/RenewLicense.css";

const RenewLicense = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [renewalPeriod, setRenewalPeriod] = useState("1 Year");
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (!plateNumber || !selectedState) {
      alert("Please enter your vehicle plate number and select a state.");
      return;
    }

    // Define renewal prices
    const renewalPrices = {
      "1 Year": 15000,
      "2 Years": 25000,
      "3 Years": 35000,
      "4 Years": 45000,
      "5 Years": 55000,
    };

    // Get the amount based on the selected renewal period
    const amount = renewalPrices[renewalPeriod];

    // Navigate to the Payment page with the data
    navigate("/payments", { state: { plateNumber, renewalPeriod, selectedState, amount } });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="text-center pt-3">RoadPass</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="text-white">
            <FaCar /> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/vehicleregistration" className="text-white">
            <FaClipboardList /> My Vehicles
          </Nav.Link>
          <Nav.Link as={Link} to="/renewlicense" className="text-white active">
            <FaCar /> Renew License
          </Nav.Link>
          <Nav.Link as={Link} to="/fines" className="text-white active">
            <FaExclamationTriangle /> Fines
          </Nav.Link>
          <Nav.Link as={Link} to="/payments" className="text-white">
            <FaCreditCard /> Payments
          </Nav.Link>
          <Nav.Link as={Link} to="/transactionhistory" className="text-white">
            <FaHistory /> Transaction History
          </Nav.Link>
          <Nav.Link as={Link} to="/settings" className="text-white">
            <FaCog /> Settings
          </Nav.Link>
          <Nav.Link as={Link} to="/logout" className="text-white">
            <FaSignOutAlt /> Logout
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <Container className="renew-license-container">
          <Card className="renew-license-card p-4 mt-2 shadow-sm">
            <h3 className="text-center text-primary">Renew License</h3>
            <Form>
              {/* Plate Number Input */}
              <Form.Group controlId="plateNumber" className="mb-3">
                <Form.Label>Vehicle Plate Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Plate Number"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                />
              </Form.Group>

              {/* State Selection Dropdown */}
              <Form.Group controlId="stateSelection" className="mb-3">
                <Form.Label>Select State</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select State</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="FCT">FCT (Abuja)</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </Form.Control>
              </Form.Group>

              {/* Renewal Period Selection */}
              <Form.Group controlId="renewalPeriod" className="mb-3">
                <Form.Label>Renewal Period</Form.Label>
                <Form.Control
                  as="select"
                  value={renewalPeriod}
                  onChange={(e) => setRenewalPeriod(e.target.value)}
                >
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                  <option>4 Years</option>
                  <option>5 Years</option>
                </Form.Control>
              </Form.Group>

              {/* Proceed to Payment Button */}
              <Button
                variant="primary"
                className="mt-3 w-100"
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default RenewLicense;
