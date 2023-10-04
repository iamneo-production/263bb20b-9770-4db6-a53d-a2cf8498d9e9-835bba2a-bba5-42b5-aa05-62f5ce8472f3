import React, { useState } from 'react';

const ServiceRequestForm = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [applianceType, setApplianceType] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customerName, applianceType, issueDescription });
    setCustomerName('');
    setApplianceType('');
    setIssueDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Customer Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div>
        <label>Appliance Type:</label>
        <input
          type="text"
          value={applianceType}
          onChange={(e) => setApplianceType(e.target.value)}
        />
      </div>
      <div>
        <label>Issue Description:</label>
        <textarea
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
        />
      </div>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default ServiceRequestForm;
