import React, { FC } from 'react';
import { timeConverter } from '../../utils/timeConverter';
import { dateTimeConverter } from '../../utils/dateTimeConverter';

type PropsType = {
  text: string;
  time: number;
  dateStart: number;
  dateFinish: number;
};

const TaskItem: FC<PropsType> = ({ time, text, dateStart, dateFinish }) => {
  return (
    <div className="mb-2 border p-2 row">
      <div className="col-12 col-sm-6 fw-bolder">{text} </div>
      <div className="col-12 col-sm-2">{timeConverter(time)} </div>
      <div className="col-12 text-sm-end col-sm-4">
        {dateTimeConverter(dateStart) + ' - ' + dateTimeConverter(dateFinish)}
      </div>
    </div>
  );
};

export default TaskItem;
