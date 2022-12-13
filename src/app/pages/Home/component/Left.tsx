import React, { useState } from 'react';
import { calendarCheck, logoAm, mask, ticket } from 'asset/export';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentPark, parkArr } from 'app/pages/App/slice/selector';
import { v4 as uuid } from 'uuid';
import { GET_USER_INFO } from 'app/pages/App/slice';
import { bookingActions } from 'app/pages/Booking/slice';
export interface LeftProps {}
const Left = (props: LeftProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const [active, setActive] = useState(false);
  const parkList = useSelector(parkArr);
  const current = useSelector(currentPark);
  return (
    <div className="--left h-100">
      <div className="logo d-flex justify-content-center align-items-center">
        <img src={logoAm} alt="" />
      </div>
      <div className="tab-menu d-flex flex-column justify-content-between">
        <div className="menu" id="accordion">
          <div className="card">
            <div className="card-header p-0" id="headingOne">
              <button
                className="btn d-flex justify-content-between text-white"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                onClick={e => setActive(!active)}
              >
                <h6 className="fs-18 mb-0 fw-bold">Sun World Phu Quoc</h6>
                {active ? (
                  <i className="fa-solid fa-caret-down"></i>
                ) : (
                  <i className="fa-solid fa-caret-up"></i>
                )}
              </button>
            </div>
            <div
              id="collapseOne "
              className={active ? 'collapse mt-2 show' : 'collapse mt-2 '}
              aria-labelledby="headingOne"
              data-bs-parent="#accordion"
            >
              <div className="--sub-menu d-flex flex-column">
                {parkList?.map(item => (
                  <a
                    key={uuid()}
                    onClick={() => {
                      dispatch(GET_USER_INFO({ park: item.park.id }));
                      dispatch(bookingActions.cartClear());
                      dispatch(bookingActions.clearSearch());
                    }}
                    className={
                      current == item.park.id
                        ? '--item-sub text-white fs-14 active'
                        : '--item-sub text-white fs-14 '
                    }
                  >
                    <span>{item.park.name}</span>
                    <i className="fa-solid fa-check"></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="--tab mt-3">
              <div
                onClick={() => navigate('/')}
                className={
                  path === '/'
                    ? '--item-tab --link active'
                    : '--item-tab --link '
                }
              >
                <img src={calendarCheck.default} alt="" />
                <h6 className="fs-18 text-white mb-0">Booking</h6>
              </div>
              <div
                onClick={() => navigate('/History')}
                className={
                  path.includes('/History')
                    ? '--item-tab --link active'
                    : '--item-tab --link '
                }
              >
                <img src={ticket.default} alt="" />
                <h6 className="fs-18 text-white mb-0">My Order</h6>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header p-0" id="headingTwo">
              <button
                className="btn d-flex justify-content-between text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6 className="fs-18 mb-0 fw-bold">Reports</h6>
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
            {/* <div
              id="collapseTwo"
              className="collapse mt-2"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion"
            >
              <div className="--sub-menu d-flex flex-column">
                <a href="" className="--item-sub text-white fs-14 active">
                  <span>Sun World Ba Na Hills</span>
                  <i className="fa-solid fa-check"></i>
                </a>
                <a href="" className="--item-sub text-white fs-14">
                  <span>Sun World Ba Na Hills</span>
                  <i className="fa-solid fa-check"></i>
                </a>
                <a href="" className="--item-sub text-white fs-14">
                  <span>Sun World Ba Na Hills</span>
                  <i className="fa-solid fa-check"></i>
                </a>
                <a href="" className="--item-sub text-white fs-14">
                  <span>Sun World Ba Na Hills</span>
                  <i className="fa-solid fa-check"></i>
                </a>
                <a href="" className="--item-sub text-white fs-14">
                  <span>Sun World Ba Na Hills</span>
                  <i className="fa-solid fa-check"></i>
                </a>
                <a href="" className="--item-sub text-white fs-14">
                  <span>Sun World Ba Na Hills</span>
                  <i className="fa-solid fa-check"></i>
                </a>
              </div>
            </div>
            <div className="--tab mt-3">
              <div className="--item-tab --link">
                <img src={calendarCheck.default} alt="" />
                <h6 className="fs-18 text-white mb-0">Booking</h6>
              </div>
              <div className="--item-tab --link">
                <img src={ticket.default} alt="" />
                <h6 className="fs-18 text-white mb-0">My Order</h6>
              </div>
            </div> */}
          </div>
        </div>
        <div className="cards d-flex flex-column justify-content-between">
          <img src={mask.default} alt="" />
          <div className="--txt d-flex justify-content-between">
            <span className="fs-14 text-white">Balance</span>
            <a className="--link --refresh" href="">
              <i className="fa-solid fa-arrow-rotate-right"></i>
              <span className="fs-14">Refresh</span>
            </a>
          </div>
          <div className="--number fw-bold text-white">-150,000,000đ</div>
        </div>
      </div>
    </div>
  );
};
export default Left;
