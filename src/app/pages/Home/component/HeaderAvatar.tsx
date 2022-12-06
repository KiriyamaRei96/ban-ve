import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bg } from 'asset/export';
import { LOG_OUT } from 'app/pages/App/slice';

export interface HeaderAvatarProps {}

const HeaderAvatar = (props: HeaderAvatarProps) => {
  const Navigate = useNavigate();
  const dispacth = useDispatch();
  return (
    <div className="avatar">
      <div className="--wrapper">
        <img src={bg} alt="" />
      </div>

      <ul className="--drop-down">
        <li onClick={() => Navigate('Account')}>Profile</li>
        <li onClick={() => dispacth(LOG_OUT())}>Log Out</li>
      </ul>
    </div>
  );
};
export default HeaderAvatar;
