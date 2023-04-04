import React, { Fragment } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import './Profile.scss';
import defaultAvatar from '../../assets/avatar-3.jpg';
import CryptoJS from 'crypto-js';

const Profile = () => {
  // let user = JSON.parse(localStorage.getItem('user'));
  const SECRET_KEY = 'SECRET_KEY';
  const encryptedUser = localStorage.getItem('user');
  const bytes = CryptoJS.AES.decrypt(encryptedUser, SECRET_KEY);
  const user = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return (
    <Fragment>
      <Row>
        <Col md={3}>
          {user.photoURL === '' ? (
            <img src={defaultAvatar} alt='profile' className='avatar' />
          ) : (
            <img src={user.photoURL} alt='profile' className='avatar' />
          )}
        </Col>
        <Col md={9}>
          <div className='mt-2'>
            <h5>{user.email}</h5>
            {user.emailVerified ? (
              <Badge color='success'>Verified</Badge>
            ) : (
              <Badge color='danger'>Not - Verifed</Badge>
            )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Profile;
