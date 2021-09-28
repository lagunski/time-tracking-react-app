import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/store';
import TaskItem from '../taskItem/TaskItem';
import { FormControl } from 'react-bootstrap';
import TasksPagination from '../tasksPagination/TasksPagination';
import FilterBar from '../filterBar/FilterBar';

const TasksWrapper: FC = () => {
  const { tasks, pageSize, currentPage } = useSelector((state: AppRootStateType) => state.tasks);
  const [filterText, setFilterText] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterText(e.target.value);
  };

  const tasksRender = tasks
    .filter((task) => {
      return task.text.includes(filterText);
    })
    .map((task) => (
      <TaskItem
        text={task.text}
        time={task.time}
        key={task.id}
        dateStart={task.dateStart}
        dateFinish={task.dateFinish}
      />
    ));

  return (
    <div>
      <div className="row mb-3">
        <div className="col-5 ps-sm-0">
          <FormControl
            type="text"
            placeholder="write text"
            value={filterText}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-7 text-end pe-sm-0">
          <FilterBar />
        </div>
      </div>
      <div className="px-sm-0 px-2">
        {tasksRender.length
          ? tasksRender.slice((currentPage - 1) * pageSize, currentPage * pageSize)
          : 'not found'}
      </div>

      <div className="row">
        <div className="col-12 px-sm-0 mt-2">
          <TasksPagination tasksCount={tasksRender.length} />
        </div>
      </div>
    </div>
  );
};

export default TasksWrapper;
