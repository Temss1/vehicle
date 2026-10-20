import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Nav, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCar, FaUser, FaClipboardList, FaCreditCard, FaHistory, FaCog, FaSignOutAlt, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { PaystackButton } from "react-paystack"; // Paystack integration
import "../css/Payments.css";

const Payments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plateNumber, renewalPeriod, amount, selectedState } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [bankTransferSuccess, setBankTransferSuccess] = useState(false);

  // Paystack Config (Replace with actual public key and user email)
  const publicKey = "pk_test_0cf767a3dc9a102f7b5cc216dbf199f34cc89223";
  const email = "temiloluwajoy5@gmail.com";
  const currency = "NGN";

  const handleSuccess = () => {
    alert("Payment successful! Your license has been renewed.");
    navigate("/history");
  };

  const paystackConfig = {
    email,
    amount: amount * 100,
    publicKey,
    currency,
    onSuccess: handleSuccess,
    onClose: () => alert("Payment was cancelled."),
  };

  const handleBankTransfer = () => {
    setTimeout(() => {
      setBankTransferSuccess(true);
      alert("Bank Transfer Successful! Your license has been renewed.");
      navigate("/history");
    }, 2000);
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
          <Nav.Link as={Link} to="/payments" className="text-white active"><FaCreditCard /> Payments</Nav.Link>
          <Nav.Link as={Link} to="/transactionhistory" className="text-white"><FaHistory /> Transaction History</Nav.Link>
          <Nav.Link as={Link} to="/settings" className="text-white"><FaCog /> Settings</Nav.Link>
          <Nav.Link as={Link} to="/logout" className="text-white"><FaSignOutAlt /> Logout</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <Container className="payment-container">
          <Card className="payment-card p-4 shadow-lg border-0 rounded">
            <h3 className="text-center text-primary mb-4">Payment</h3>
            {bankTransferSuccess && (
              <Alert variant="success" className="text-center">
                <FaCheckCircle /> Bank Transfer Successful!
              </Alert>
            )}
            
            <Card.Body>
              <h5>Plate Number: <span className="text-secondary">{plateNumber || "N/A"}</span></h5>
              <h5>Renewal Period: <span className="text-secondary">{renewalPeriod || "N/A"}</span></h5>
              <h5>Renewal State: <span className="text-secondary">{selectedState || "N/A"}</span></h5>
              <h5>Amount: <span className="text-success">₦{amount || "N/A"}</span></h5>
            </Card.Body>

            <Form>
              <Form.Group controlId="paymentMethod">
                <Form.Label>Select Payment Method</Form.Label>
                <Form.Control 
                  as="select" 
                  value={paymentMethod} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mb-3"
                >
                  <option>Credit Card</option>
                  <option>Bank Transfer</option>
                  <option>USSD</option>
                </Form.Control>
              </Form.Group>

              {paymentMethod === "Credit Card" && (
                <PaystackButton 
                  className="btn btn-success btn-lg mt-2 w-100"
                  {...paystackConfig}
                >
                  Pay Now
                </PaystackButton>
              )}

              {paymentMethod === "Bank Transfer" && (
                <Button 
                  variant="info" 
                  className="mt-2 w-100 btn-lg"
                  onClick={handleBankTransfer}
                >
                  Confirm Bank Transfer
                </Button>
              )}

              {paymentMethod === "USSD" && (
                <Button 
                  variant="warning" 
                  className="mt-2 w-100 btn-lg"
                  onClick={() => alert("USSD Payment is coming soon!")}
                >
                  Pay via USSD
                </Button>
              )}
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Payments;
