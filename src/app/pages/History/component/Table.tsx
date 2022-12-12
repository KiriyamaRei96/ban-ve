import React from 'react';
import { clear, eyeScanner, mobilePayment, refresh } from 'asset/export';
import { ResponseType } from '../slice/types';
import { v4 as uuid } from 'uuid';
import { numberWithCommas } from 'utils/helper';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loading } from '../slice/selector';
import { Skeleton, Table as AntdTable } from 'antd';
import { ColumnsType } from 'antd/es/table';

const Table = ({ historyList }) => {
  const navigate = useNavigate();
  const isLoading = useSelector(loading);
  const column: ColumnsType<ResponseType> = [
    {
      title: 'PNR',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => (
        <div
          onClick={() => navigate(`/History/${record.id}`)}
          className="--name-ticket"
        >
          #{record?.id}
        </div>
      ),
    },
    {
      title: 'Date time',
      dataIndex: 'orderdate',
      key: 'orderdate',
      render: (_, record) => (
        <div className="--day-ticket">{record?.orderdate.datetime}</div>
      ),
    },
    {
      title: 'Flags',
      dataIndex: 'flag',
      key: 'flag',
      render: (_, record) => <div className="--flag-ticket">A___</div>,
    },
    {
      title: 'Status',
      dataIndex: 'orderState',
      key: 'orderState',
      render: (_, record) => (
        <div className="--status-ticket   ">
          <p className="mb-0 --item active">
            {record?.orderState?.replace('orderstate.status.', '')}
          </p>
          {/* <p className="mb-0 --item inactive">Pending</p>
<p className="mb-0 --item default">Done</p> */}
        </div>
      ),
    },
    {
      title: 'Payment method',
      dataIndex: 'payment',
      key: 'payment',
      render: (_, record) => (
        <div className="--pay-ticket">
          <p className="mb-0 --item active">
            <img src={mobilePayment.default} alt="" />
            <span>{record?.payment?.code}</span>
          </p>
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => <div className="--qua-ticket">200</div>,
    },
    {
      title: 'Amount paid',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (_, record) => (
        <div className="--amount-ticket">
          {record && numberWithCommas(record?.totalPrice)}đ
        </div>
      ),
    },
    {
      title: 'Options',
      dataIndex: 'Options',
      key: 'Options',
      render: (_, record) => (
        <div className="--option-ticket">
          <button onClick={() => navigate(`/History/${record?.id}`)}>
            <img src={eyeScanner.default} alt="" />
          </button>
          <button>
            <img src={refresh.default} alt="" />
          </button>
          <button>
            <img src={clear.default} alt="" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      {!isLoading ? (
        <AntdTable
          pagination={false}
          columns={column}
          dataSource={historyList}
          className="table-ticket"
        />
      ) : (
        <Skeleton style={{ height: '100%' }} active />
      )}
    </>
  );
};
export default Table;
