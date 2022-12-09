import React from 'react';
import { useDispatch } from 'react-redux';
import { Pagination as Type } from '../slice/types';
import { Pagination as Pagi } from 'antd';
import { historyActions } from '../slice';

const Pagination = ({ paginationInfo }) => {
  const data: Type = paginationInfo;
  const dispatch = useDispatch();
  return (
    <div className="--bot d-flex justify-content-between">
      <div className="number-ticket d-flex align-items-center">
        {data?.totalCount} item
      </div>
      <Pagi
        className="pagination"
        itemRender={(_, type, originalElement) => {
          if (type === 'prev') {
            return <i className="fa-solid fa-angles-left"></i>;
          }
          if (type === 'next') {
            return <i className="fa-solid fa-angles-right"></i>;
          }
          return originalElement;
        }}
        onChange={e => {
          dispatch(historyActions.setPage(e));
        }}
        showSizeChanger={false}
        current={data?.current}
        total={data?.totalCount}
        pageSize={data?.numItemsPerPage || 25}
      />
    </div>
  );
};
export default Pagination;
