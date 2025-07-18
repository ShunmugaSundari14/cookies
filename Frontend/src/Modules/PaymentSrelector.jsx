
// PaymentSection.jsx
import React, { useState } from 'react';
import './PaymentSection.css'; // Assuming you'll have some CSS for styling

function PaymentSection() {
    // You might use state to manage the selected payment method
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [isExpanded, setIsExpanded] = useState(false); // State to manage panel expansion

    // Dummy payment options for demonstration
    const paymentOptions = [
        { id: 'credit_card', name: 'Credit/Debit Card' },
        { id: 'upi', name: 'UPI' },
        { id: 'net_banking', name: 'Net Banking' },
        { id: 'cash_on_delivery', name: 'Cash on Delivery' },
    ];

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="payment-section-container">
            <div className="payment-header" onClick={toggleExpansion}>
                <div className="payment-icon">
                    {/* Placeholder for payment icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                </div>
                <h3>Payment</h3>
                <div className="payment-toggle-arrow">
                    {isExpanded ? '▲' : '▼'} {/* Up/Down arrow for expansion */}
                </div>
            </div>

            {isExpanded && (
                <div className="payment-content">
                    <p>Select your preferred payment method:</p>
                    <div className="payment-options">
                        {paymentOptions.map((option) => (
                            <label key={option.id} className="payment-option-item">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value={option.id}
                                    checked={selectedPaymentMethod === option.id}
                                    onChange={handlePaymentMethodChange}
                                />
                                {option.name}
                            </label>
                        ))}
                    </div>

                    {/* Example of a conditional input field based on selection */}
                    {selectedPaymentMethod === 'credit_card' && (
                        <div className="card-details-form">
                            <h4>Card Details</h4>
                            <div className="form-group">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardName">Name on Card</label>
                                <input type="text" id="cardName" placeholder="John Doe" />
                            </div>
                            <div className="form-row">
                                <div className="form-group half-width">
                                    <label htmlFor="expiryDate">Expiry Date</label>
                                    <input type="text" id="expiryDate" placeholder="MM/YY" />
                                </div>
                                <div className="form-group half-width">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" placeholder="123" />
                                </div>
                            </div>
                            <button className="pay-button">Pay Now</button>
                        </div>
                    )}

                    {selectedPaymentMethod === 'upi' && (
                        <div className="upi-details">
                            <h4>UPI Details</h4>
                            <div className="form-group">
                                <label htmlFor="upiId">Enter UPI ID</label>
                                <input type="text" id="upiId" placeholder="yourname@bankupi" />
                            </div>
                            <button className="pay-button">Verify & Pay</button>
                        </div>
                    )}

                    {/* Add more conditions for other payment methods */}

                    {selectedPaymentMethod === 'cash_on_delivery' && (
                        <div className="cod-info">
                            <p>You will pay cash when the order is delivered.</p>
                            <button className="confirm-cod-button">Confirm Cash on Delivery</button>
                        </div>
                    )}

                    {/* You'll likely need a button to proceed with payment or confirm */}
                    {/* <button className="proceed-payment-button">Proceed to Pay</button> */}
                </div>
            )}
        </div>
    );
}

export default PaymentSection;