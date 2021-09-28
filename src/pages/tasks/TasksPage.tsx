import React, { FC } from 'react';
import { Timer } from '../../components/timer/Timer';
import TasksWrapper from '../../components/tasksWrapper/TasksWrapper';

const TasksPage: FC = () => {
  return (
    <div className="container">
      <div className="my-5">
        <Timer />
      </div>
      <TasksWrapper />
    </div>
  );
};

export default TasksPage;
