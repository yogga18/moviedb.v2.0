import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import './DarkMode.css';

const DarkMode = () => {
  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let theme;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
    }
  };

  return (
    <div>
      <FormGroup switch>
        <Input
          //   id='darkMode'
          className={theme === 'darak' ? clickedClass : ''}
          type='checkbox'
          onClick={(e) => {
            switchTheme(e);
          }}
          defaultChecked={theme === 'dark' ? true : false}
        />
      </FormGroup>
    </div>
  );
};

export default DarkMode;
