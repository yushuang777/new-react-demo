import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu';

function Home() {
  return (
    <div>
      目录
      <Menu />
      <Outlet />
    </div>
  );
}

export default Home;
