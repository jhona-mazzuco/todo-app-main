import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import taskReducer from './reducers/task.reducer';

const makeStore = () => createStore(taskReducer);

const store = createWrapper(makeStore, { debug: false });

export default store;
