import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { bg, date, search2, search3, vector } from 'asset/export';

import {
  cartList,
  loading,
  performances,
  search,
  Shows,
  ticketList as list,
} from '../slice/selector';
import { Skeleton } from 'antd';
import { bookingActions } from '../slice';
import {
  CartItemType,
  ParentCategoryDataType,
  PerformancesDataType,
  ShowDataType,
  TicketsType,
} from '../slice/types';
import { numberWithCommas } from 'utils/helper';
export interface TicketsProps {}

const Tickets = (props: TicketsProps) => {
  const isLoading = useSelector(loading);
  const ticketList = useSelector(list);
  const ShowsList = useSelector(Shows);
  const performance = useSelector(performances);
  const searchInfo = useSelector(search);
  const cart = useSelector(cartList);
  const date = useSelector(search)?.date;
  const dispatch = useDispatch();
  const changeHandler = (e, ticket: CartItemType | any) => {
    const isInCart = cart.some(
      item => item.uid == ticket?.id?.toString() + searchInfo?.performances,
    );
    if (!isInCart)
      dispatch(
        bookingActions.cartAdd({
          amount: 1,
          id: ticket.id,
          date,
          price: ticket.price,
          name: ticket.name,
          performance: searchInfo?.performances,
          uid: ticket?.id?.toString() + searchInfo?.performances,
        }),
      );
    if (isInCart)
      dispatch(
        bookingActions.cartDelete(
          ticket?.id?.toString() + searchInfo?.performances,
        ),
      );
  };
  return (
    <div className="--item">
      <div className="name-tab d-flex align-items-center">
        <div className="--icon">
          <img src={vector} alt="" />
        </div>
        <h6 className="fs-18 --name fw-bold mb-0">SẢN PHẨM</h6>
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
          <div className="check mb-4 d-flex justify-content-center">
            {ShowsList &&
              searchInfo?.parentCategoryIds &&
              searchInfo?.date &&
              ShowsList.data.map((item: ShowDataType) => (
                <div
                  onClick={() => {
                    dispatch(
                      bookingActions.setSearch({
                        shows: item.value,
                      }),
                    );
                  }}
                  key={uuid()}
                  className={
                    searchInfo?.shows == item.value
                      ? '--item-check d-flex active'
                      : '--item-check d-flex'
                  }
                >
                  <span>{item.json.name}</span>
                  {searchInfo?.shows == item.value && (
                    <div className="--item d-flex">
                      {isLoading && <Skeleton active />}
                      {!isLoading &&
                        performance &&
                        performance?.data.map((item: PerformancesDataType) => (
                          <span
                            onClick={() => {
                              dispatch(
                                bookingActions.setSearch({
                                  performances: item.value,
                                }),
                              );
                            }}
                            className={
                              searchInfo?.performances == item.value
                                ? 'active'
                                : ''
                            }
                          >
                            {item.json.timeFrom}
                          </span>
                        ))}
                    </div>
                  )}
                  {isLoading && <Skeleton active />}
                  {searchInfo?.shows == item.value &&
                    !isLoading &&
                    ticketList.map((ticket: TicketsType) => (
                      <label
                        onClick={e => e.stopPropagation()}
                        key={uuid()}
                        className="--input-group d-flex"
                      >
                        <input
                          onChange={e => changeHandler(e, ticket)}
                          checked={cart.some(
                            item =>
                              item.uid ==
                              ticket?.id?.toString() + searchInfo?.performances,
                          )}
                          type="checkbox"
                          name=""
                        />
                        <span className="checkmark"></span>
                        <div>
                          <span className="--name">{ticket.name}</span>
                          <span className="--price">
                            {ticket && numberWithCommas(ticket.price)}đ
                          </span>
                        </div>
                      </label>
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
          {/* <div className="--img">
            <img src={bg} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Tickets;
