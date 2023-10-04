import React, { useState } from 'react';

function Registration() {
  // Define state variables for username, password, and email
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [submitName, setSubmitName] = useState('');
  const [submitPassword, setSubmitPassword] = useState('');
  const [submitEmail, setSubmitEmail] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    setSubmitName(username);
    setSubmitPassword(password);
    setSubmitEmail(email);
    alert(`Username: ${username}, Password: ${password}, Email: ${email}`);
  };

  return (
    <div className="registration-page">
      <h1>Registration</h1>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        <p>Username: {submitName}</p>
        <p>Password: {submitPassword}</p>
        <p>Email: {submitEmail}</p>
      </div>
    </div>
  );
}

export default Registration;
