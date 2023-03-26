import React, { Fragment } from 'react';
import { Badge, Card, CardBody, Col, Container, Row } from 'reactstrap';
import Navigation from '../Navigation/Navigation';
import './Profile.scss';
import defaultAvatar from '../../assets/avatar-3.jpg';

const DetailProfile = () => {
  let user = JSON.parse(localStorage.getItem('user'));

  // logging
  console.log('user', user);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <Row className='mt-5'>
          <Col md={2}></Col>
          <Col md={8} className='profile-card'>
            <Card>
              <CardBody>
                {user.photoURL === '' ? (
                  <img
                    src={defaultAvatar}
                    alt='profile'
                    className='detail-avatar'
                  />
                ) : (
                  <img
                    src={user.photoURL}
                    alt='profile'
                    className='detail-avatar'
                  />
                )}
                <div className='mt-3 d-flex gap-2 flex-column justify-content-center align-content-center align-items-center'>
                  <h4 className='text-dark text-center'>{user.email}</h4>
                  {user.emailVerified ? (
                    <Badge color='success'>Verified</Badge>
                  ) : (
                    <Badge color='danger'>Not - Verifed</Badge>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DetailProfile;
