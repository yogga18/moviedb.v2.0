import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const SideMenus = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Fragment>
      <div className='d-flex justify-content-end gap-3 pe-5 pt-3'>
        <Button
          color='primary'
          outline
          onClick={() => {
            navigateTo('/movie-charts');
          }}
        >
          <i className='bi bi-cart-plus' />
        </Button>
        <Button
          color='primary'
          outline
          onClick={() => {
            navigateTo('/forum');
          }}
        >
          <i className='bi bi-chat-right-dots' />
        </Button>
      </div>
    </Fragment>
  );
};

export default SideMenus;
