import * as React from 'react';
import {
  card,
  clear,
  date,
  eyeScanner,
  mobilePayment,
  moneyBag,
  refresh,
  search2,
} from 'asset/export';
export interface HistoryProps {}

export function History(props: HistoryProps) {
  return (
    <div className="--content">
      <div className="history">
        <div className="toolbar d-flex justify-content-between mb-3">
          <div className="filter d-flex align-items-center ">
            <div className="search me-2">
              <input type="text" />
              <img src={search2.default} alt="" />
            </div>
            <div className="day me-2">
              <input type="text" />
              <img src={date.default} alt="" />
            </div>
            <div className="open">
              <select name="" id="">
                <option value="">Open</option>
              </select>
            </div>
          </div>
          <button className="add-ticket">
            <i className="fa-solid fa-plus"></i> <span>New tickets</span>
          </button>
        </div>
        <div className="table-ticket">
          <div className="--name d-flex justify-content-between">
            <p className="fs-18">PNR</p>
            <p className="fs-18">Date time</p>
            <p className="fs-18">Flags</p>
            <p className="fs-18">Status</p>
            <p className="fs-18">Payment method</p>
            <p className="fs-18">Quantity</p>
            <p className="fs-18">Amount paid</p>
            <p className="fs-18">Options</p>
          </div>
          <div className="--item-ticket">
            <div className="--name-ticket">#1363794</div>
            <div className="--day-ticket">2022/07/28 05:00</div>
            <div className="--flag-ticket">A___</div>
            <div className="--status-ticket   ">
              <p className="mb-0 --item active">Open</p>
              <p className="mb-0 --item inactive">Pending</p>
              <p className="mb-0 --item default">Done</p>
            </div>
            <div className="--pay-ticket">
              <p className="mb-0 --item active">
                <img src={mobilePayment.default} alt="" />
                <span>Online</span>
              </p>
              <p className="mb-0 --item inactive">
                <img src={card.default} alt="" />
                <span>Credit</span>
              </p>
              <p className="mb-0 --item default">
                <img src={moneyBag.default} alt="" />
                <span>Cash</span>
              </p>
            </div>
            <div className="--qua-ticket">200</div>
            <div className="--amount-ticket">4,800,000đ</div>
            <div className="--option-ticket">
              <button>
                <img src={eyeScanner.default} alt="" />
              </button>
              <button>
                <img src={refresh.default} alt="" />
              </button>
              <button>
                <img src={clear.default} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="--bot d-flex justify-content-between">
          <div className="number-ticket d-flex align-items-center">
            120 item
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link " href="#">
                  <i className="fa-solid fa-angles-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link active" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
