import React, { useEffect } from 'react';
import * as layoutStyles from '@styles/layout.module.scss';
import TaskShowing from '@components/TaskShowing';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '@states/actions/task.actions';
import TaskListFooter from '@components/TaskListFooter';
import { TaskState } from '@interfaces/task-state.interface';

const TaskList = (): JSX.Element => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: TaskState) => state.tasks);

  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <div className={layoutStyles['content__list']}>
      <ul className={layoutStyles['list']}>
        {tasks?.map((task, index) => (
          <li key={task.uuid || index} className={layoutStyles['list__item']}>
            <TaskShowing task={task} />
          </li>
        ))}
        <TaskListFooter />
      </ul>
    </div>
  );
};

export default TaskList;
