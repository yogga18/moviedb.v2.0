import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from 'reactstrap';
import DarkMode from '../../Darkmode';
import '../Navigation.scss';

const OffcanvasComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Button color='primary' onClick={toggleOffcanvas}>
        Open Offcanvas
      </Button>
      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas}>
        <OffcanvasHeader closeButton>
          {/* <h5 className='text-dark'>Offcanvas Header</h5> */}
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav navbar>
            <NavItem>
              <NavLink href='/genres'>
                <b className='text-white'>Genres</b>
              </NavLink>
            </NavItem>
            <NavItem className='navitemside'>
              <NavLink href='/about' className='navlinkitemside'>
                <b className='text-white'>About</b>
              </NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret>
                <b className='text-white'>Login</b>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link className='text-decoration-none text-dark'>
                    <b>Login</b>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className='text-decoration-none text-dark'
                    to='/register'
                  >
                    <b>Sign Up</b>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem className='pt-2'>
              <DarkMode />
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default OffcanvasComponent;
