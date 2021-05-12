import React, { useState } from 'react';
import * as styles from '@styles/task.module.scss';
import * as layoutStyles from '@styles/layout.module.scss';
import { register } from 'states/actions/task.actions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const TaskRegister = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const onKeypress = (event) => {
    if (value && event.key === 'Enter') {
      setValue('');
      dispatch(register(value));
      router.replace(router.asPath);
    }
  };

  return (
    <div className={layoutStyles['content__form']}>
      <div className={styles['task']}>
        <span className={`${styles['checkbox']} ${styles['checkbox--disabled']}`}>
          <span />
        </span>
        <input type="text" placeholder="Press enter to save task" value={value} onChange={onInputChange} onKeyDown={onKeypress} />
      </div>
    </div>
  );
};

export default TaskRegister;
