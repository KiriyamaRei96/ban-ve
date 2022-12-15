import React from 'react';
import { comboShape, en, vn } from 'asset/export';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderAvatar from './HeaderAvatar';
import Noity from './Noity';
import { currentPark, parkArr } from 'app/pages/App/slice/selector';
import Language from './Language';
export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const Navigate = useNavigate();
  const parks = useSelector(parkArr);
  const park = useSelector(currentPark);

  return (
    <div className="info d-flex justify-content-between align-items-center">
      <div className="name-tab d-flex align-items-center">
        <img src={comboShape.default} alt="" />
        <h4 className="text-white --name fw-bold mb-0">
          {parks?.find(item => item?.park?.id == park)?.park?.name}
        </h4>
      </div>
      <div className="--info d-flex align-items-center">
        <Noity />
        <HeaderAvatar />
        <Language />
      </div>
    </div>
  );
};
export default Header;
