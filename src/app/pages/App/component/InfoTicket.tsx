import React, { useEffect, useState } from 'react';
import { numberWithCommas, paymentStateMap } from 'utils/helper';
import { Form } from 'antd';
import { eyeScanner } from 'asset/export';
import { ResponseType } from 'app/pages/CheckOut/slice/types';
import { v4 as uuid } from 'uuid';
// import { Modal } from './Modal';
import Modal from 'react-bootstrap/Modal';
import { ModalContent } from './Modal';
const InfoTicket = ({ res, readOnly = true }) => {
  const data: ResponseType = res;
  const [isShow, setIsShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  function viewHandler(item) {
    setModalData(item.tickets);
    setIsShow(true);
  }
  const onCloseDialog = () => {
    setIsShow(false);
  };
  const [form] = Form.useForm();
  useEffect(() => {
    if (res)
      form.setFields(
        Object.entries(res).map((value, index) => {
          return { name: value[0], value: value[1] };
        }),
      );
  }, [res]);
  return (
    <>
      <div className="info-ticket">
        <div className="row">
          <div className="col-md-9">
            <div className="--info d-flex fs-14">
              <ul>
                <li>
                  <span>PNR</span>
                  <span>#{data?.ordernumber}</span>
                </li>
                <li>
                  <span>Flags</span>
                  <span>{data?.flags}</span>
                </li>
                <li>
                  <span>Status</span>
                  <span
                    style={{ color: paymentStateMap[data?.orderState.value] }}
                  >
                    {data?.orderState.name}
                  </span>
                </li>
                <li>
                  <span>Sale Chanel</span>
                  <span>B2B</span>
                </li>
                <li>
                  <span>Payment method</span>
                  <span>{data?.payment?.code}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Owner</span>
                  <span>{data?.agent?.name}</span>
                </li>
                <li>
                  <span>Date/Time</span>
                  <span>{data?.orderdate?.datetime}</span>
                </li>
                <li>
                  <span>Facility</span>
                  <span>{data?.agent.park.name}</span>
                </li>
                <li>
                  <span>Visit date</span>
                  <span>2022/07/28 05:00</span>
                </li>
                <li>
                  <span>Total</span>
                  <span>{data?.items.length}</span>
                </li>
              </ul>
            </div>
            <div className="tabble-ticket">
              <div className="--item-tableticket">
                <p>View</p>
                <p>ITEMS</p>
                <p>Unit amount/Taxes</p>
                <p>Quantity</p>
                <p>Total amount /Taxes</p>
              </div>
              {data &&
                data?.items.map(item => (
                  <div key={uuid()} className="--item-tableticket">
                    <p>
                      <button
                        disabled={item.tickets.length === 0}
                        onClick={() => viewHandler(item)}
                      >
                        <img src={eyeScanner.default} alt="" />
                      </button>
                    </p>
                    <p>
                      <span>{item?.productName}</span>
                      <span>
                        {item?.performance?.timeFrom} - ZONE 2 - G1, G2
                      </span>
                    </p>
                    <p>
                      <span>{data && numberWithCommas(item?.price)}??</span>
                      <span>30,000??</span>
                    </p>
                    <p>x{item?.amount}</p>
                    <p>
                      <span>{data && numberWithCommas(item?.totalPrice)}??</span>
                      <span>60,000??</span>
                    </p>
                  </div>
                ))}

              <div className="billplease">
                <div className="--item-bill d-flex justify-content-between align-items-center">
                  <span>Amount due</span>
                  <span className="--money">
                    {data && numberWithCommas(data?.totalPrice)}??
                  </span>
                </div>
                <div className="--item-bill d-flex justify-content-between align-items-center">
                  <span>Amount paid</span>
                  <span className="--money">0??</span>
                </div>
                <div className="--item-bill d-flex justify-content-between align-items-center">
                  <span>Amount Remaining</span>
                  <span className="--money">
                    {data && numberWithCommas(data?.totalPrice)}??
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form">
              <Form form={form}>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Operator Name{' '}
                  </label>
                  <Form.Item name="tourOperatorName">
                    <input readOnly={readOnly} type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Guide Name
                  </label>
                  <Form.Item name="tourGuideName">
                    <input readOnly={readOnly} type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Guide Mobile
                  </label>
                  <Form.Item name="tourGuideMobile">
                    <input readOnly={readOnly} type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Group code
                  </label>
                  <Form.Item name="tourGroupCode">
                    <input readOnly={readOnly} type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Nationality
                  </label>
                  <Form.Item name="tourNation">
                    <input readOnly={readOnly} type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Note
                  </label>
                  <Form.Item name="tourNotes">
                    <input readOnly={readOnly} type="text" />
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className=" modal-ticket"
        centered
        show={isShow}
        onHide={onCloseDialog}
      >
        <Modal.Body className="d-flex p-0">
          <ModalContent close={onCloseDialog} modalData={modalData} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default InfoTicket;
