import React, { useEffect, useState } from "react";
import { Container, Card, Table, Nav, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCar, FaUser, FaClipboardList, FaCreditCard, FaHistory, FaCog, FaSignOutAlt, FaExclamationTriangle } from "react-icons/fa";
import "../css/TransactionHistory.css";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch transactions from Django backend
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions/"); // Replace with your API endpoint
        const data = await response.json();
        setTransactions(data.transactions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar (Matches Dashboard) */}
      <div className="sidebar">
        <h4 className="text-center pt-3">RoadPass</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="text-white"><FaCar /> Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/vehicleregistration" className="text-white"><FaClipboardList /> My Vehicles</Nav.Link>
          <Nav.Link as={Link} to="/renewlicense" className="text-white"><FaCar /> Renew License</Nav.Link>
          <Nav.Link as={Link} to="/fines" className="text-white active"><FaExclamationTriangle /> Fines</Nav.Link>
          <Nav.Link as={Link} to="/payments" className="text-white"><FaCreditCard /> Payments</Nav.Link>
          <Nav.Link as={Link} to="/transactionhistory" className="text-white active"><FaHistory /> Transaction History</Nav.Link>
          <Nav.Link as={Link} to="/settings" className="text-white"><FaCog /> Settings</Nav.Link>
          <Nav.Link as={Link} to="/logout" className="text-white"><FaSignOutAlt /> Logout</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <Container className="history-container">
          <Card className="history-card p-4 mt-2 shadow-sm">
            <h3 className="text-center text-primary">Transaction History</h3>

            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : transactions.length === 0 ? (
              <p className="text-center mt-3">No transactions found.</p>
            ) : (
              <Table striped bordered hover className="mt-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Plate Number</th>
                    <th>Renewal Period</th>
                    <th>State</th>
                    <th>Amount (₦)</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={transaction.id}>
                      <td>{index + 1}</td>
                      <td>{transaction.plate_number}</td>
                      <td>{transaction.renewal_period}</td>
                      <td>{transaction.state}</td>
                      <td>{transaction.amount}</td>
                      <td className={transaction.status === "Success" ? "text-success" : "text-danger"}>
                        {transaction.status}
                      </td>
                      <td>{new Date(transaction.date).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default TransactionHistory;
