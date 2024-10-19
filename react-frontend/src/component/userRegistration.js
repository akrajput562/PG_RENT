import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [roleId, setRoleId] = useState('');
  const [roles, setRoles] = useState([]);

  // Fetch available roles from the backend
  useEffect(() => {
    axios.get('/api/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error('Error fetching roles:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/register', {
        username,
        password,
        email,
        roleId
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select value={roleId} onChange={(e) => setRoleId(e.target.value)} required>
        <option value="">Select Role</option>
        {roles.map((role) => (
          <option key={role.roleId} value={role.roleId}>
            {role.roleName}
          </option>
        ))}
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
