import React, { useEffect, useState } from 'react';
import * as layoutStyles from '@styles/layout.module.scss';
import { ThemeColor } from '@enums/theme-color.enum';
import Image from 'next/image';

const Header = (): JSX.Element => {
  const [themeColor, setThemeColor] = useState(ThemeColor.DARK);

  useEffect(() => {
    putTheme(ThemeColor.DARK);
  }, []);

  const changeTheme = () => {
    const theme = themeColor === ThemeColor.DARK ? ThemeColor.LIGHT : ThemeColor.DARK;
    setThemeColor(theme);
    putTheme(theme);
  };

  const putTheme = (themeColor: ThemeColor) => {
    const hasDarkTheme = themeColor === ThemeColor.DARK;
    document.querySelector('body').style.setProperty('--bg-image', `url("/images/bg-desktop-${themeColor.toLowerCase()}.jpg")`);
    document.querySelector('body').style.setProperty('--bg-color', hasDarkTheme ? '#181824' : '#e4e5f1');
    document.querySelector('body').style.setProperty('--bg-task-color', hasDarkTheme ? '#25273c' : '#fafafa');
    document.querySelector('body').style.setProperty('--bg-checkbox-color', hasDarkTheme ? '#25273c' : '#fafafa');
    document.querySelector('body').style.setProperty('--font-color', hasDarkTheme ? '#777a92' : '#393a4c');
    document.querySelector('body').style.setProperty('--font-hover-color', hasDarkTheme ? '#fafafa' : '#484b6a');
  };

  return (
    <div className={layoutStyles['content__header']}>
      <h1>TODO</h1>
      <button type="button" onClick={changeTheme}>
        <Image src={`/images/icon-${themeColor === ThemeColor.DARK ? 'sun' : 'moon'}.svg`} width={25} height={25} />
      </button>
    </div>
  );
};

export default Header;
