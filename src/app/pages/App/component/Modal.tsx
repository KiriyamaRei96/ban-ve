import React from 'react';
import { email, prin, qr } from 'asset/export';

export interface ModalProps {}

export function ModalContent(props: ModalProps) {
  return (
    <>
      <div className="modal-content">
        <button type="button" className="close" data-bs-dismiss="modal">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal-body">
          <div className="modal-list d-flex">
            <div className="--item-modal">
              <h6 className="--name fw-bold">
                Vé xem biểu diễn signature show Phú Quốc
              </h6>
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
                  <span>Zone </span>
                  <span>1</span>
                </li>
                <li>
                  <span>Seat: </span>
                  <span>GG 22</span>
                </li>
              </ul>
              <div className="--qr">
                <img src={qr} alt="" />
              </div>
            </div>
            <div className="--item-modal">
              <h6 className="--name fw-bold">
                Vé xem biểu diễn signature show Phú Quốc
              </h6>
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
                  <span>Zone </span>
                  <span>1</span>
                </li>
                <li>
                  <span>Seat: </span>
                  <span>GG 22</span>
                </li>
              </ul>
              <div className="--qr">
                <img src={qr} alt="" />
              </div>
            </div>
            <div className="--item-modal">
              <h6 className="--name fw-bold">
                Vé xem biểu diễn signature show Phú Quốc
              </h6>
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
                  <span>Zone </span>
                  <span>1</span>
                </li>
                <li>
                  <span>Seat: </span>
                  <span>GG 22</span>
                </li>
              </ul>
              <div className="--qr">
                <img src={qr} alt="" />
              </div>
            </div>
            <div className="--item-modal">
              <h6 className="--name fw-bold">
                Vé xem biểu diễn signature show Phú Quốc
              </h6>
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
                  <span>Zone </span>
                  <span>1</span>
                </li>
                <li>
                  <span>Seat: </span>
                  <span>GG 22</span>
                </li>
              </ul>
              <div className="--qr">
                <img src={qr} alt="" />
              </div>
            </div>
            <div className="--item-modal">
              <h6 className="--name fw-bold">
                Vé xem biểu diễn signature show Phú Quốc
              </h6>
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
                  <span>Zone </span>
                  <span>1</span>
                </li>
                <li>
                  <span>Seat: </span>
                  <span>GG 22</span>
                </li>
              </ul>
              <div className="--qr">
                <img src={qr} alt="" />
              </div>
            </div>
          </div>
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
            <div className="arrow_modal"></div>
          </div>
        </div>
      </div>
    </>
  );
}
