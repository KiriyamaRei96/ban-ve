import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Toolbar from './component/Toolbar';
import Table from './component/Table';
import { useDispatch, useSelector } from 'react-redux';
import { historyActions, SEARCH_HISTORY, useHistorySlice } from './slice';
import Pagination from './component/Pagination';
import { historyArr, opitons, pagination, searchInfo } from './slice/selector';
export interface HistoryProps {}

export function History(props: HistoryProps) {
  const { actions } = useHistorySlice();
  const location = useLocation();
  const search = useSelector(searchInfo);
  const paginationInfo = useSelector(pagination);
  const opitonList = useSelector(opitons);
  const historyList = useSelector(historyArr);

  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(historyActions.clearSearch());
  }, [location]);
  useEffect(() => {
    dispacth(SEARCH_HISTORY(search));
  }, [search]);

  return (
    <div className="--content">
      <div className="history d-flex">
        <Toolbar options={opitonList} />
        <Table historyList={historyList} />
        <Pagination paginationInfo={paginationInfo} />
      </div>
    </div>
  );
}
