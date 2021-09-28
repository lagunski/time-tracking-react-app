import { TasksState } from '../../types/TasksState';
import { ActionsType } from './tasksActionTypes';
import {
  ADD_NEW_TASK,
  SAVE_DATE_FINISH,
  SAVE_DATE_START,
  SET_CURRENT_PAGE,
  SORT_TASKS_ASC,
  SORT_TASKS_DESC,
} from './videosActions';
import { v1 } from 'uuid';
import { TaskType } from '../../types/TaskType';
import { tasksMock } from '../../mock/tasksMock';

const initialState: TasksState = {
  tasks: tasksMock,
  pageSize: 5,
  currentPage: 1,
  isActiveSortAsc: false,
  isActiveSortDesc: false,
  dateStartReport: '',
  dateFinishReport: '',
};

export const tasksReducer = (state = initialState, action: ActionsType): TasksState => {
  switch (action.type) {
    case ADD_NEW_TASK:
      const newTask: TaskType = {
        id: v1(),
        text: action.text,
        time: action.time,
        dateStart: action.dateStart,
        dateFinish: action.dateStart + action.time,
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
      };
    case SORT_TASKS_ASC:
      return {
        ...state,
        isActiveSortAsc: !state.isActiveSortAsc,
        isActiveSortDesc: false,
        tasks: state.tasks.sort((a, b) => {
          return a.dateFinish - b.dateFinish;
        }),
      };
    case SORT_TASKS_DESC:
      return {
        ...state,
        isActiveSortDesc: !state.isActiveSortDesc,
        isActiveSortAsc: false,
        tasks: state.tasks.sort((a, b) => {
          return b.dateFinish - a.dateFinish;
        }),
      };
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SAVE_DATE_START: {
      return { ...state, dateStartReport: action.dateStartReport };
    }
    case SAVE_DATE_FINISH: {
      return { ...state, dateFinishReport: action.dateFinishReport };
    }
    default:
      return { ...state };
  }
};
