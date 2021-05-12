import React from 'react';
import TaskRegister from '@components/TaskRegister';
import Head from 'next/head';
import * as layoutStyles from '@styles/layout.module.scss';
import Header from '@components/Header';
import TaskList from '@components/TaskList';

const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>TODO APP</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" as="style" />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className={layoutStyles['wrapper']}>
      <div className={layoutStyles['wrapper__content']}>
        <Header />
        <TaskRegister />
        <TaskList />
      </div>
    </div>
  </div>
);

export default Home;
