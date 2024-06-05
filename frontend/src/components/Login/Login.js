import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Menggunakan useNavigate
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Menggunakan useNavigate

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      // Jika autentikasi berhasil, arahkan ke halaman dasbor
      navigate('/dashboard');
    } else {
      setError('Username atau password salah');
    }
  };

  // Fungsi untuk menangani penekanan tombol Enter pada input password
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <section className='this-display'>
      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            placeholder="admin"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="admin123"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress} // Memanggil fungsi handleKeyPress saat menekan tombol pada input password
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </section>
  );
};

export default LoginPage;
