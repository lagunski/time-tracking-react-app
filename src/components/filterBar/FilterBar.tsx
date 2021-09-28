import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { sortTasksAscAC, sortTasksDescAC } from '../../store/task/tasksActionTypes';
import { useDispatch } from 'react-redux';

const FilterBar: FC = () => {
  const dispatch = useDispatch();

  const onSortedAsc = (): void => {
    dispatch(sortTasksAscAC());
  };
  const onSortedDesc = (): void => {
    dispatch(sortTasksDescAC());
  };
  return (
    <div>
      <Button type="button" onClick={onSortedAsc} className="me-2">
        Sort Asc
      </Button>
      <Button type="button" onClick={onSortedDesc}>
        Sort Desc
      </Button>
    </div>
  );
};

export default FilterBar;
