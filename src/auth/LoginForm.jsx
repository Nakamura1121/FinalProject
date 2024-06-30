import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem(username));
    if (storedUser) {
      const isValidPassword = bcrypt.compareSync(password, storedUser.password);
      if (isValidPassword) {
        alert('Login successful!');
        onLogin(username);
      } else {
        alert('Invalid username or password.');
      }
    } else {
      alert('User not found.');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
