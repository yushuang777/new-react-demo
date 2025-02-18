import React from 'react';
import { routeList } from '../../route';
import { Button } from 'antd';

function index() {
  return (
    <div>
      {routeList.map((item, index) => {
        return <>{item.title && <Button key={index}> {item.title}</Button>}</>;
      })}
    </div>
  );
}

export default index;
