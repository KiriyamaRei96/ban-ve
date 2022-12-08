import React from 'react';
import { Pagination as Type } from '../slice/types';
import { Pagination as Pagi } from 'antd';

const Pagination = ({ paginationInfo }) => {
  const data: Type = paginationInfo;
  return (
    <div className="--bot d-flex justify-content-between">
      <div className="number-ticket d-flex align-items-center">
        {data?.totalCount} item
      </div>
      <Pagi
        className="--pagination"
        itemRender={(_, type, originalElement) => {
          if (type === 'prev') {
            return <i className="fa-solid fa-angles-left"></i>;
          }
          if (type === 'next') {
            return <i className="fa-solid fa-angles-right"></i>;
          }
          return originalElement;
        }}
        // onChange={(e) => {
        //   const top = list?.current?.offsetTop;
        //   window.scrollTo({
        //     top,
        //     behavior: "smooth",
        //   });

        //   setPage(e);
        // }}
        current={data?.current}
        total={data?.totalCount}
        pageSize={data?.numItemsPerPage || 25}
      />
      {/* <nav aria-label="Page navigation example">
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
      </nav> */}
    </div>
  );
};
export default Pagination;
