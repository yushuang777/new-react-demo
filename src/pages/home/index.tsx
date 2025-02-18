import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu';

function Home() {
  return (
    <div>
      Home
      <Menu />
      <Outlet />
    </div>
  );
}

export default Home;
