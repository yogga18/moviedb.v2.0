import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../Navigation.scss';

const MenuOffCanvas = ({ path }) => {
  const navigate = useNavigate();

  const handlerGoToSomeWhere = (path) => {
    navigate(path);
  };

  return (
    <Fragment>
      <div
        className='menu-offcanvas-wrapper'
        onClick={() => {
          handlerGoToSomeWhere(path);
        }}
      >
        <h5 className='text-center menu-offcanvas-text'>BUG 🪲</h5>
        <hr className='text-dark' />
      </div>
    </Fragment>
  );
};

MenuOffCanvas.propTypes = {
  path: PropTypes.string.isRequired,
};

export default MenuOffCanvas;
