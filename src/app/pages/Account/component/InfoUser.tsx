import React from 'react';
import { bg, camera } from 'asset/export';
import { useSelector } from 'react-redux';
import { userInfo } from 'app/pages/App/slice/selector';
export interface InfoUserProps {}

const InfoUser = (props: InfoUserProps) => {
  const info = useSelector(userInfo);
  return (
    <div className="col-md-3">
      <div className="--infouser d-flex flex-column align-items-center text-center">
        <div className="avatar">
          <div className="--img">
            <img src={bg} alt="" />
          </div>
          <button>
            <img src={camera.default} alt="" />
          </button>
        </div>
        <div className="--txt">
          <h6 className="mb-0 fw-bold">{info?.name}</h6>
          <span>{info?.email}</span>
        </div>
      </div>
      <div className="--value">
        <div className="--title mb-3 d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold">Balance</h5>
          <a href="">
            {' '}
            <i className="fa-solid fa-arrow-rotate-right"></i>{' '}
            <span className="fs-18 ms-2">Refresh</span>
          </a>
        </div>
        <ul>
          <li>
            <span>Balance</span>
            <span>-150,000,000đ</span>
          </li>
          <li>
            <span>Total Available</span>
            <span>26,080,000đ</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default InfoUser;
