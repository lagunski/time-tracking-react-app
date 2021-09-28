import React, { FC } from 'react';
import BarChart from '../../components/barChart/BarChart';
import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveDateFinishAC, saveDateStartAC } from '../../store/task/tasksActionTypes';
import { AppRootStateType } from '../../store/store';

const ReportsPage: FC = () => {
  const dispatch = useDispatch();
  const { dateStartReport, dateFinishReport } = useSelector(
    (state: AppRootStateType) => state.tasks
  );
  const onSaveDateStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveDateStartAC(e.target.value));
  };
  const onSaveDateFinish = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveDateFinishAC(e.target.value));
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6 col-sm-4">
          <FormControl type="date" value={dateStartReport} onChange={onSaveDateStart} />
        </div>
        <div className="col-6 col-sm-4">
          <FormControl value={dateFinishReport} type="date" onChange={onSaveDateFinish} />
        </div>
      </div>
      <BarChart />
    </div>
  );
};

export default ReportsPage;
