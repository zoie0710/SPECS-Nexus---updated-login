import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="container">

        <div className="left-section">
          <div className="branding">
            <img src="/images/diamond_design.png" alt="SPECS Logo" className="header-logo" />
            <h1 className="header-title">
              <span className="specs">SPECS</span> <span className="nexus">Nexus</span>
            </h1>
          </div>

          <ul className="acronym">
            <li><span>S</span>ociety of</li>
            <li><span>P</span>rogramming</li>
            <li><span>E</span>nthusiasts in</li>
            <li><span>C</span>omputer</li>
            <li><span>S</span>cience</li>
          </ul>

          <div className="seals">
            <img src="/images/gclogo.png" alt="Gordon College Seal" />
            <img src="/images/ccslogo.png" alt="CCS Seal" />
          </div>
        </div>

        <div className="right-section">
          <img src="/images/specslogo.png" alt="SPECS Seal" className="seal-image" />
          <div className="login-box">
            <h2 className="welcome-title">Welcome Students!</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
