import React from 'react';
import { comboShape, en, vn } from 'asset/export';
import { useNavigate } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';
import Noity from './Noity';
export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const Navigate = useNavigate();
  return (
    <div className="info d-flex justify-content-between align-items-center">
      <div className="name-tab d-flex align-items-center">
        <img src={comboShape.default} alt="" />
        <h4 className="text-white --name fw-bold mb-0">Sun World Phu Quoc</h4>
      </div>
      <div className="--info d-flex align-items-center">
        <Noity />
        <HeaderAvatar />
        <div className="language d-flex align-items-center">
          <img src={vn.default} alt="" />
          <img src={en} alt="" />
          <select name="" id="">
            <option value="">vn</option>
            <option value="">en</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Header;
