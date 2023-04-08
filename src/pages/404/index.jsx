import React, { Fragment, useEffect } from 'react';
import Lottie from 'react-lottie';
import ntfnd from '../../assets/ntfnd.json';
import Navigation from '../../Components/Navigation/Navigation';
import utilities from '../../helpers/utilities';

const NotFound = () => {
  const path = window.location.pathname;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ntfnd,
  };

  const getLocalStorageUser = localStorage.getItem('user');

  const user = utilities.decLocalStrg(getLocalStorageUser);

  const reDirect = () => {
    if (user?.role === 'admin' && path === '/dashboard-admin') {
      window.location.reload();
    } else if (user?.role === 'user' && path === '/dashboard') {
      window.location.reload();
    } else {
      console.log(path);
    }
  };

  useEffect(() => {
    reDirect();
  }, []);

  return (
    <Fragment>
      <Navigation />
      <div className='mb-5'>
        <Lottie options={defaultOptions} height={650} width={500} />
      </div>
    </Fragment>
  );
};

export default NotFound;
