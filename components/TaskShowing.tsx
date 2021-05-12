import React from 'react';
import * as styles from '@styles/task.module.scss';
import { useDispatch } from 'react-redux';
import { changeDone } from '@states/actions/task.actions';
import { useRouter } from 'next/router';
import TaskShowingProps from '../types/task-showing-props.type';

const TaskShowing = ({ task }: TaskShowingProps): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onClickCheckbox = () => {
    dispatch(changeDone(task.uuid));
    router.replace(router.asPath);
  };

  return (
    <div className={`${styles['task']} ${task.done ? styles['task--checked'] : ''}`}>
      <span id={task.uuid} className={styles['checkbox']} onClick={onClickCheckbox}>
        <span />
      </span>
      <b>{task.value}</b>
    </div>
  );
};

export default TaskShowing;
