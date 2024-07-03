import React from 'react';
import Dashboard from '../components/Dashboard';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default DashboardLayout;
