import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import DarkMode from '../Darkmode';
import './Navigation.scss';
import OffcanvasComponent from './Sidebar/OffcanvasComponent';

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar className='navbar-wrapper'>
      <NavbarBrand href='/' className='me-auto navbar-brand-wrapper'>
        <b className='text-white navbar-logo'>༼ つ ◕_◕ ༽つ</b>
      </NavbarBrand>
      <Nav className='menunav-wrapper'>
        <NavItem className='navitemside'>
          <NavLink href='/genres' className='navlinkitemside'>
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
              <Link className='text-decoration-none text-dark ' to='/login'>
                <b>Login</b>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className='text-decoration-none text-dark' to='/register'>
                <b>Sign Up</b>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem className='pt-2'>
          <DarkMode />
        </NavItem>
      </Nav>
      {/* <div className='me-2 burger-wrapper bg-white'>
        <OffcanvasComponent />
      </div> */}

      <NavbarToggler
        onClick={toggleNavbar}
        className='me-2 burger-wrapper bg-white'
      />
      <Collapse isOpen={!collapsed} navbar>
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
                <Link className='text-decoration-none text-dark' to='/register'>
                  <b>Sign Up</b>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem className='pt-2'>
            <DarkMode />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
