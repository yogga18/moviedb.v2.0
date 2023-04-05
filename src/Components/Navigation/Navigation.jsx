import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
  Button,
} from 'reactstrap';
import { justLogout } from '../../store/actions';
import DarkMode from '../Darkmode';
import './Navigation.scss';
import OffcanvasComponent from './Sidebar/OffcanvasComponent';
import PropTypes from 'prop-types';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = window.location.pathname;

  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [flagLogin, setFlagLogin] = useState(false);

  const { logout } = useSelector((state) => state.AuthReducer);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handlerLogout = () => {
    dispatch(justLogout());

    localStorage.removeItem('user');
    localStorage.setItem('isLogin', JSON.stringify(false));

    if (path !== '/') {
      navigate('/');
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    setFlagLogin(JSON.parse(localStorage.getItem('isLogin')));
  }, []);

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

        {!flagLogin ? (
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
        ) : null}

        {flagLogin ? (
          <div className='d-flex justify-content-center align-items-center me-2 ms-0'>
            <NavItem className='navitemside'>
              <NavLink href='/dashboard' className='navlinkitemside'>
                <b className='text-white'>Dashboard</b>
              </NavLink>
            </NavItem>
            <NavItem className='navitemside'>
              <Button size='sm' color='light' onClick={handlerLogout}>
                <b className='text-dark'>Logout</b>
              </Button>
            </NavItem>
          </div>
        ) : null}

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

          {!flagLogin ? (
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
                  <Link
                    className='text-decoration-none text-dark'
                    to='/register'
                  >
                    <b>Sign Up</b>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : null}

          {flagLogin ? (
            <NavItem className='navitemside'>
              <Button size='sm' onClick={handlerLogout}>
                Logout
              </Button>
            </NavItem>
          ) : null}

          <NavItem className='pt-2'>
            <DarkMode />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

Navigation.propTypes = {};

export default Navigation;
