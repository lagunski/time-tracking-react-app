import {
  ADD_NEW_TASK,
  SAVE_DATE_FINISH,
  SAVE_DATE_START,
  SET_CURRENT_PAGE,
  SORT_TASKS_ASC,
  SORT_TASKS_DESC,
} from './videosActions';

export const addNewTaskAC = (text: string, time: number, dateStart: number) =>
  ({ type: ADD_NEW_TASK, text, time, dateStart } as const);

export const sortTasksDescAC = () => ({ type: SORT_TASKS_DESC } as const);
export const sortTasksAscAC = () => ({ type: SORT_TASKS_ASC } as const);
export const setCurrentPageAC = (currentPage: number) =>
  ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const saveDateStartAC = (dateStartReport: string) =>
  ({ type: SAVE_DATE_START, dateStartReport } as const);
export const saveDateFinishAC = (dateFinishReport: string) =>
  ({ type: SAVE_DATE_FINISH, dateFinishReport } as const);

export type ActionsType =
  | ReturnType<typeof addNewTaskAC>
  | ReturnType<typeof sortTasksDescAC>
  | ReturnType<typeof sortTasksAscAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof saveDateStartAC>
  | ReturnType<typeof saveDateFinishAC>;
