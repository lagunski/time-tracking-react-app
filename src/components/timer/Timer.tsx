import React, { FC, useEffect, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { timeConverter } from '../../utils/timeConverter';
import { useDispatch } from 'react-redux';
import { addNewTaskAC } from '../../store/task/tasksActionTypes';

export const Timer: FC = () => {
  const [timerOn, setTimerOn] = useState(false);
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    time: 0,
    description: '',
    dateStart: 0,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTask((prevTask) => {
          return {
            time: prevTask.time + 1000,
            description: task.description,
            dateStart: task.dateStart,
          };
        });
      }, 1000);
    } else if (!timerOn) {
      // @ts-ignore
      clearInterval(interval);
    }

    return () => clearInterval(interval as NodeJS.Timeout);
  }, [timerOn, task.description, task.dateStart]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask({
      time: task.time,
      description: e.target.value,
      dateStart: task.dateStart,
    });
  };

  const startHandler = () => {
    setTimerOn(true);
    setTask({
      time: task.time,
      description: task.description,
      dateStart: new Date().getTime(),
    });
  };

  const stopHandler = () => {
    setTimerOn(false);
    setTask({
      time: 0,
      description: '',
      dateStart: task.dateStart,
    });
    dispatch(addNewTaskAC(task.description, task.time, task.dateStart));
  };

  return (
    <div className="row">
      <div className="col-6 col-sm-4 p-sm-0 mb-2 mb-sm-0">
        <FormControl
          type="text"
          placeholder="what task are you doing?"
          value={task.description}
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-6 col-sm-2 text-center">{timeConverter(task.time)}</div>
      <div className="col-12 col-sm-2">
        {!timerOn && (
          <Button onClick={startHandler} className="w-100" disabled={!task.description}>
            Start
          </Button>
        )}
        {timerOn && (
          <Button className="btn-danger w-100" onClick={stopHandler}>
            Stop
          </Button>
        )}
      </div>
    </div>
  );
};

export default Timer;
