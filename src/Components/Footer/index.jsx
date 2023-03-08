import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <Fragment>
      <Container fluid className='mt-5 footer-wrapper'>
        <p className='text-center text-decoration-none'>
          <Link to={'https://github.com/yogga18/moviedb.v2.0.git'}>
            <b>Fork Me</b>
          </Link>
        </p>
      </Container>
    </Fragment>
  );
};

export default Footer;
