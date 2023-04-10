import React, { useState } from 'react';

import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import '../Navigation.scss';
import MenuOffCanvas from './MenuOffCanvas';

const OffcanvasComponent = () => {
  const theme = localStorage.getItem('theme');

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        color='primary'
        onClick={toggleOffcanvas}
        outline
        title='expand menu'
        style={{
          position: 'fixed',
        }}
      >
        <i className='bi bi-arrows-angle-expand' />
      </Button>
      <Offcanvas
        // animation={'false'}
        isOpen={isOpen}
        toggle={toggleOffcanvas}
        scrollable
      >
        <OffcanvasHeader
          toggle={function toggleOffcanvas() {}}
          onClick={toggleOffcanvas}
        ></OffcanvasHeader>
        <OffcanvasBody>
          <div>
            <MenuOffCanvas
              path={'/reporting-bug'}
              title={'BUG 🪲'}
              sugestion={'Manage Complaint'}
            />
          </div>
          <div>
            <MenuOffCanvas
              path={'/manage-users'}
              title={'Users 🧍‍♀️🧍‍♂️'}
              sugestion={'Manage Users'}
            />
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default OffcanvasComponent;
