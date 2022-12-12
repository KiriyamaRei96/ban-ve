import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { bg, date, search2, search3, vector } from 'asset/export';

import {
  cartList,
  loading,
  parentCategory,
  performances,
  search,
  startDate,
  ticketList as list,
} from '../slice/selector';
import { Skeleton } from 'antd';
import { bookingActions } from '../slice';
import {
  CartItemType,
  ParentCategoryDataType,
  PerformancesDataType,
  TicketsType,
} from '../slice/types';
export interface TicketsProps {}

const Tickets = (props: TicketsProps) => {
  const isLoading = useSelector(loading);
  const ticketList = useSelector(list);
  const category = useSelector(parentCategory);
  const performance = useSelector(performances);

  const cart = useSelector(cartList);
  const date = useSelector(search)?.date;
  const dispatch = useDispatch();
  const changeHandler = (e, ticket: CartItemType) => {
    const isInCart = cart.some(
      item =>
        item.id === ticket.id && item.performance == performance?.currentValue,
    );
    if (!isInCart)
      dispatch(
        bookingActions.cartAdd({
          amount: 1,
          id: ticket.id,
          date,
          price: ticket.price,
          name: ticket.name,
          performance: performance?.currentValue,
        }),
      );
    if (isInCart) dispatch(bookingActions.cartDelete(ticket.id));
  };
  return (
    <div className="--item">
      <div className="name-tab d-flex align-items-center">
        <div className="--icon">
          <img src={vector} alt="" />
        </div>
        <h6 className="fs-18 --name fw-bold mb-0">LOẠI SẢN PHẨM</h6>
      </div>

      <div className="tab-content">
        {/* <div className="--item-content">
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
        </div> */}
        <div className="--item-content active">
          {/* <h6 className="fs-18 mb-3">
            Ves xem show diễn Signature Show Phú Quốc
          </h6> */}
          {isLoading ? (
            <Skeleton active />
          ) : (
            <div className="check mb-4 d-flex justify-content-center">
              {performance &&
                performance.data.map((item: PerformancesDataType) => (
                  <div
                    onClick={() => {
                      dispatch(
                        bookingActions.setSearch({
                          performances: item.value,
                        }),
                      );
                    }}
                    key={uuid()}
                    className={
                      performance.currentValue == item.value
                        ? '--item-check d-flex active'
                        : '--item-check d-flex'
                    }
                  >
                    <span>{item.json.name}</span>
                    <div className="--item d-flex">
                      <span>
                        {item.json.dateFrom.datetime} -{' '}
                        {item.json.dateTo.datetime}
                      </span>
                    </div>
                    {performance.currentValue == item.value &&
                      ticketList.map(ticket => (
                        <div
                          onClick={e => e.stopPropagation()}
                          key={uuid()}
                          className="--input-group d-flex"
                        >
                          {/* <div>
                            <input
                              disabled
                              type="checkbox"
                              name=""
                              id={ticket.id + 'vip'}
                            />
                            <label htmlFor={ticket.id + 'vip'}>Vé Vip</label>
                          </div> */}
                          <div>
                            <label htmlFor={ticket.id + 'normal'}>
                              {ticket.name}
                            </label>
                            <input
                              onChange={e => changeHandler(e, ticket)}
                              checked={cart.some(
                                item =>
                                  item.id === ticket.id &&
                                  item.performance == performance.currentValue,
                              )}
                              type="checkbox"
                              name=""
                              id={ticket.id + 'normal'}
                            />
                          </div>
                        </div>
                      ))}

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
