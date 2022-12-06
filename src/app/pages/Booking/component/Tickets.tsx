import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bg, search2, search3 } from 'asset/export';
import { loading, ticketList as list } from '../slice/selector';
import { Skeleton } from 'antd';
export interface TicketsProps {}

const Tickets = (props: TicketsProps) => {
  const isLoading = useSelector(loading);
  const ticketList = useSelector(list);

  return (
    <div className="--item">
      <div className="name-tab d-flex align-items-center">
        <div className="--item-tab --link fw-bold ">PARK TICKETS</div>
        <div className="--item-tab --link fw-bold active">SIGNATURE SHOW</div>
      </div>
      <div className="tab-content">
        <div className="--item-content">
          <div className="search-filter d-flex">
            <div className="search">
              <img src={search2.default} alt="" />
              <input type="text" placeholder="Nhập từ khóa" />
            </div>
            <div className="filter">
              <img src={search3.default} alt="" />
            </div>
          </div>
          <div className="list-ticket mt-3">
            <div className="--item-ticket active">
              <h6 className="fs-18 mb-0 me-2">
                Hon Thom 2 Ways Ticket Adult 30D Hon Thom 2 Ways Ticket Adult
                30D
              </h6>
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="--item-ticket active">
              <h6 className="fs-18 mb-0 me-2">
                Hon Thom 2 Ways Ticket Adult 30D
              </h6>
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="--item-ticket">
              <h6 className="fs-18 mb-0 me-2">
                Hon Thom 2 Ways Ticket Adult 30D
              </h6>
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="--item-ticket">
              <h6 className="fs-18 mb-0 me-2">
                Hon Thom 2 Ways Ticket Adult 30D
              </h6>
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="--item-ticket">
              <h6 className="fs-18 mb-0 me-2">
                Hon Thom 2 Ways Ticket Adult 30D
              </h6>
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="--item-ticket">
              <h6 className="fs-18 mb-0 me-2">
                Hon Thom 2 Ways Ticket Adult 30D
              </h6>
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
        </div>
        <div className="--item-content active">
          <h6 className="fs-18 mb-3">
            Ves xem show diễn Signature Show Phú Quốc
          </h6>
          {isLoading ? (
            <Skeleton active />
          ) : (
            <div className="check mb-4 d-flex justify-content-center">
              {ticketList.map(ticket => (
                <div className="--item-check d-flex ">
                  <span>{ticket.name}</span>
                  <div className="--item">
                    <span>09:30 AM</span>
                  </div>
                  {/* <input type="radio" id="time1" name="time" value="" />
                  <label htmlFor="time1">09:30 AM</label> */}
                </div>
              ))}

              {/* <div className="--item-check d-flex align-items-center">
              <input type="radio" id="time2" name="time" value="" />
              <label htmlFor="time2">09:30 PM</label>
            </div> */}
            </div>
          )}

          {/* <div className="--img">
            <img src={bg} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Tickets;
