import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/users">users</Link>
        </li>
        <li>
          <Link to="/dashboard/admin">admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
