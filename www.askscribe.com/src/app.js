import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [femail, setFemail] = useState('');
  const [fpassword, setFpassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        fusername: 'YourUsername',
        femail,
        fpassword,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login-user', {
        femail,
        fpassword,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleUploadPDF = async () => {
    const base64PDF = 'YourBase64EncodedPDF'; 
    try {
      const response = await axios.post('http://localhost:5000/upload-pdf', {
        base64: base64PDF,
        femail,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleGetPDF = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getpdf/${femail}`);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return(
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setFemail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setFpassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleUploadPDF}>Upload PDF</button>
      <button onClick={handleGetPDF}>Get PDF</button>
    </div>
  );
};

export default App;
