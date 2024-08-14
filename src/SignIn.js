import React from 'react';
import './SignIn.css'; // We'll create this CSS file for styling

function SignIn() {
  return (
    <div className="signin-container">
      {/* Left Side */}
      <div className="signin-left">
        <div className="logo-container">
          {/* Replace the `src` with your actual logo image path */}
          <img src="spclogo.png" alt="Logo" className="logo" />
          <h1 className="system-name">School Inventory Management System</h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="signin-right">
        <h2>Sign In</h2>
        <form className="signin-form">
  <div className="form-group">
    <label htmlFor="username"></label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required />
  </div>
  <div className="form-group">
    <label htmlFor="password"></label>
    <input type="password" id="password" name="password" placeholder="Enter your password" required />
  </div>
  <div className="form-actions">
    <a href="#" className="forgot-password">Forgot Password?</a>
    <a href="#" className="signup">Sign Up</a>
  </div>
  <button type="submit" className="login-button">Login</button>
</form>

      </div>
    </div>
  );
}

export default SignIn;
