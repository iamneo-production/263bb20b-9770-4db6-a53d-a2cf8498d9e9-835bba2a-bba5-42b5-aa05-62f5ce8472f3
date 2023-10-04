import React from 'react';

const ServiceRequestList = ({ requests }) => {
  return (
    <div>
      <h2>Service Requests</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>
            <strong>Customer Name:</strong> {request.customerName}<br />
            <strong>Appliance Type:</strong> {request.applianceType}<br />
            <strong>Issue Description:</strong> {request.issueDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRequestList;
