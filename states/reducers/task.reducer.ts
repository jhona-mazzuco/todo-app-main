import { AnyAction } from 'redux';
import { CHANGE_COMPLETED, CLEAR_COMPLETED, GET, GET_FILTERED, REGISTER } from '@states/actions/task.actions';
import { TaskState } from '@interfaces/task-state.interface';
import TASKS_STORAGE_KEY from '@constants/tasks-storage-key.constant';
import { TaskFilter } from '@enums/task-filter.enum';

const initialState: TaskState = {
  tasks: [],
};

const saveTasks = (tasks) => localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
const getTasks = () => JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));

const taskReducer = (state = initialState, action: AnyAction): TaskState => {
  switch (action.type) {
    case GET:
      const list = getTasks();
      if (list) {
        state.tasks = list;
      }

      return state;
    case GET_FILTERED:
      return {
        tasks: getTasks().filter((task) => {
          const { payload } = action;
          if (payload === TaskFilter.ALL) {
            return task;
          }

          return task.done === (payload === TaskFilter.COMPLETED);
        }),
      };
    case REGISTER:
      state.tasks.push(action.payload);
      saveTasks(state.tasks);
      return state;
    case CHANGE_COMPLETED:
      const task = state.tasks.find((row) => row.uuid === action.payload);
      if (task) {
        task.done = !task.done;
        saveTasks(state.tasks);
      }

      return state;
    case CLEAR_COMPLETED:
      const tasks = state.tasks.filter((row) => !row.done);
      saveTasks(tasks);
      return {
        tasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
