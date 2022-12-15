import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, edit, email, prin } from 'asset/export';
import InfoTicket from 'app/pages/App/component/InfoTicket';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { response } from './slice/selector';
import { GET_HISTORY_DETAIL, useHistoryDetailSlice } from './slice';
export interface HistorydetailProps {}

export function Historydetail(props: HistorydetailProps) {
  const { actions } = useHistoryDetailSlice();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const param = useParams();
  const dispatch = useDispatch();
  const data = useSelector(response);
  useEffect(() => {
    dispatch(GET_HISTORY_DETAIL(param.id));
  }, [param, location]);

  return (
    <div className="--content">
      <div className="historydetail ">
        <div className="--top mb-3 d-flex align-items-center justify-content-between">
          <div className="--name d-flex align-items-center">
            <div onClick={() => navigate(-1)} className="--back me-3">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <h5 className="fw-bold mb-0">Order Detail</h5>
          </div>
          <div className="button d-flex">
            <button disabled={data?.orderState.value !== 'success'}>
              <img src={prin.default} alt="" />
              <span>Print Ticket</span>
            </button>
            <button>
              <img src={email.default} alt="" />
              <span>Send email</span>
            </button>
            <button disabled={!readOnly} onClick={() => setReadOnly(false)}>
              <img src={edit.default} alt="" />
              <span>edit</span>
            </button>
            <button>
              <img src={clear.default} alt="" />
              <span>delete</span>
            </button>
          </div>
        </div>
        <InfoTicket readOnly={readOnly} res={data} />
      </div>

      <div className="modal-list d-flex">
        {/* {data.tick.map(item => (
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
              ))} */}
      </div>
    </div>
  );
}
