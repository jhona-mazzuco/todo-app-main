import Task from 'class/task.class';
import { AnyAction } from 'redux';
import { FilterTask } from '../../enums/filter-task.enum';

export const GET = 'GET';
export const GET_FILTERED = 'GET_FILTERED';
export const REGISTER = 'REGISTER';
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const get = (): AnyAction => ({
  type: GET,
});

export const getFiltered = (filter: FilterTask): AnyAction => ({
  type: GET_FILTERED,
  payload: filter,
});

export const register = (value: string): AnyAction => ({
  type: REGISTER,
  payload: new Task(value),
});

export const changeDone = (uuid: string): AnyAction => ({
  type: CHANGE_COMPLETED,
  payload: uuid,
});

export const clearCompleted = (): AnyAction => ({
  type: CLEAR_COMPLETED,
});

export default {
  register,
  changeDone,
};
