import React, { Fragment } from 'react';
import Lottie from 'react-lottie';
import ntfnd from '../../assets/ntfnd.json';
import Navigation from '../../Components/Navigation/Navigation';

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ntfnd,
  };

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
