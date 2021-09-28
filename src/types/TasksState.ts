import { TaskType } from './TaskType';

export type TasksState = {
  tasks: Array<TaskType>;
  pageSize: number;
  currentPage: number;
  isActiveSortAsc: boolean;
  isActiveSortDesc: boolean;
  dateStartReport: string;
  dateFinishReport: string;
};
