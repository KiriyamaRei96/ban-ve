import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { email, prin, qr } from 'asset/export';
import Slider from 'react-slick';
export function ModalContent({ modalData }) {
  const slider = useRef<any>(null);
  return (
    <>
      <div className="modal-content">
        <button type="button" className="close" data-bs-dismiss="modal">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal-body">
          {modalData && modalData.length <= 4 && (
            <div className="modal-list d-flex">
              {modalData.map(item => (
                <div key={uuid()} className="--item-modal col-md-3">
                  <h6 className="--name fw-bold">{item.name}</h6>
                  <ul>
                    <li>
                      <span>Date: </span>
                      <span>12/12/2020</span>
                    </li>
                    <li>
                      <span>Show time: </span>
                      <span>09:30 PM</span>
                    </li>
                    <li>
                      <span>Standard</span>
                    </li>
                    <li>
                      <span>Column </span>
                      <span>{item.col}</span>
                    </li>
                    <li>
                      <span>Seat: </span>
                      <span>
                        {item.category} {item.col}
                      </span>
                    </li>
                  </ul>
                  <div className="--qr">
                    <img src={qr} alt="" />
                  </div>
                </div>
              ))}
            </div>
          )}
          {modalData && modalData.length > 4 && (
            <div className="modal-list">
              <Slider
                ref={slider}
                {...{
                  arrows: false,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }}
              >
                {modalData.map(item => (
                  <div key={uuid()}>
                    <div className="--item-modal">
                      <h6 className="--name fw-bold">{item.name}</h6>
                      <ul>
                        <li>
                          <span>Date: </span>
                          <span>12/12/2020</span>
                        </li>
                        <li>
                          <span>Show time: </span>
                          <span>09:30 PM</span>
                        </li>
                        <li>
                          <span>Standard</span>
                        </li>
                        <li>
                          <span>Column </span>
                          <span>{item.col}</span>
                        </li>
                        <li>
                          <span>Seat: </span>
                          <span>
                            {item.category} {item.col}
                          </span>
                        </li>
                      </ul>
                      <div className="--qr">
                        <img src={qr} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}

          <div className="button d-flex justify-content-between">
            <div className="bttn">
              <button className="--btn">
                <img src={email.default} alt="" />
                <span>Send Email</span>
              </button>
              <button className="--btn">
                <img src={prin.default} alt="" />
                <span>Print Ticket</span>
              </button>
            </div>
            {modalData.length > 4 ? (
              <div className="arrow_modal">
                <button
                  onClick={() => slider?.current?.slickPrev()}
                  className="arrow prevarrow"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => slider?.current?.slickNext()}
                  className="arrow "
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </>
  );
}
