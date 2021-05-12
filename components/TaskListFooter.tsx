import React, { useState } from 'react';
import * as layoutStyles from '@styles/layout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted, getFiltered } from '@states/actions/task.actions';
import { TaskState } from '@interfaces/task-state.interface';
import { TaskFilter } from '@enums/task-filter.enum';
import { useRouter } from 'next/router';

const TaskListFooter = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tasks = useSelector((state: TaskState) => state.tasks);
  const [filter, setFilter] = useState(TaskFilter.ALL);

  const onClickAllOption = () => {
    setFilter(TaskFilter.ALL);
    dispatch(getFiltered(TaskFilter.ALL));
    router.replace(router.asPath);
  };

  const onClickActiveOption = () => {
    setFilter(TaskFilter.ACTIVE);
    dispatch(getFiltered(TaskFilter.ACTIVE));
    router.replace(router.asPath);
  };
  const onClickCompletedOption = () => {
    setFilter(TaskFilter.COMPLETED);
    dispatch(getFiltered(TaskFilter.COMPLETED));
    router.replace(router.asPath);
  };
  const onClickClearCompletedOption = () => {
    dispatch(clearCompleted());
    router.replace(router.asPath);
  };

  const getStyleOption = (activatedFilter: TaskFilter) =>
    `${layoutStyles['filter__item']} ${filter === activatedFilter ? layoutStyles['filter__item--activated'] : ''}`;

  return (
    <li key="footer" className={layoutStyles['list__footer']}>
      <span>{tasks.length} items left</span>

      <ul className={layoutStyles['footer__filter']}>
        <li className={getStyleOption(TaskFilter.ALL)} onClick={onClickAllOption}>
          All
        </li>
        <li className={getStyleOption(TaskFilter.ACTIVE)} onClick={onClickActiveOption}>
          Active
        </li>
        <li className={getStyleOption(TaskFilter.COMPLETED)} onClick={onClickCompletedOption}>
          Completed
        </li>
      </ul>

      <span className={layoutStyles['footer__clear']} onClick={onClickClearCompletedOption}>
        Clear Completed
      </span>
    </li>
  );
};

export default TaskListFooter;
