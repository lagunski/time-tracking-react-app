import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/store';
import { setCurrentPageAC } from '../../store/task/tasksActionTypes';
import { Pagination } from 'react-bootstrap';

type Props = {
  tasksCount: number;
};

const TasksPagination: FC<Props> = ({ tasksCount }) => {
  const { pageSize, currentPage } = useSelector((state: AppRootStateType) => state.tasks);
  const dispatch = useDispatch();
  const [pages, setPages] = useState<Array<number>>([]);

  const setCurrentPage = useCallback(
    (pageNumber: number): void => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    [dispatch]
  );

  const pagesCount = useMemo(() => {
    return Math.ceil(tasksCount / pageSize);
  }, [tasksCount, pageSize]);

  useEffect(() => {
    const tempPages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
      tempPages.push(i);
    }
    setPages(tempPages);
  }, [pagesCount]);

  const pagesRender = useMemo(() => {
    if (tasksCount > pageSize) {
      return pages.map((pageNumber) => {
        return (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber}
          </Pagination.Item>
        );
      });
    }
    return <></>;
  }, [currentPage, pageSize, pages, setCurrentPage, tasksCount]);

  return <Pagination>{pagesRender}</Pagination>;
};

export default TasksPagination;
