import React from 'react';
import Header from './component/Header';
import Left from './component/Left';
import { Outlet } from 'react-router-dom';
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <div>
      <div className="bb d-flex">
        <Left />
        <div className="--right">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
