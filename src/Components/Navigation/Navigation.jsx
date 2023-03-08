import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import DarkMode from '../Darkmode';
import './Navigation.scss';

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

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
        <NavItem className='pt-2'>
          <DarkMode />
        </NavItem>
      </Nav>
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
          <NavItem className='pt-2'>
            <DarkMode />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
