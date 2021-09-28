import React, { FC, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { dateRange } from '../../utils/dateRange';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/store';
import { dateConverter } from '../../utils/dateConverter';

const BarChart: FC = () => {
  const { dateStartReport, dateFinishReport, tasks } = useSelector(
    (state: AppRootStateType) => state.tasks
  );

  const labels = useMemo(() => {
    if (dateStartReport && dateFinishReport) {
      return dateRange(new Date(dateStartReport), new Date(dateFinishReport));
    }
    return [];
  }, [dateFinishReport, dateStartReport]);

  const datasetsData = useMemo(() => {
    if (labels.length) {
      return labels.map((label) => {
        const reduce = tasks.reduce((sum, task) => {
          if (new Date(task.dateFinish).getDate() === new Date(label).getDate()) {
            return sum + task.time;
          }
          return sum;
        }, 0);
        return reduce / 60000 / 60;
      });
    }
    return [];
  }, [labels, tasks]);

  const data = {
    labels: labels.map(dateConverter),
    datasets: [
      {
        data: datasetsData,
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgb(54, 162, 235)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
