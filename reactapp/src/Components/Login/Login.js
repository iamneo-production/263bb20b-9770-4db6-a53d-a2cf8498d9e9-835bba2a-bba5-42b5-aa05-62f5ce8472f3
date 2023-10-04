import React, { useState } from 'react';

function Login() {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitName,setSubmitName] = useState("");
  const [submitPassword,setSubmitPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); 
    setSubmitName(username);
    setSubmitPassword(password); 
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <div>
        <p> Username: {submitName} </p>
        <p>Password: {submitPassword}</p>
      </div>
    </div>
  );
}

export default Login;
