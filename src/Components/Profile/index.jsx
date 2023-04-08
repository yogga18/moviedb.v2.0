import React, { Fragment, useEffect, useState } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import './Profile.scss';
import defaultAvatar from '../../assets/avatar-3.jpg';
import utilities from '../../helpers/utilities';

const Profile = () => {
  const [user, setUser] = useState({});

  const getLocalStrg = () => {
    const encryptedUser = localStorage.getItem('user');
    const bytes = utilities.decLocalStrg(encryptedUser);
    // const user = JSON.parse(bytes);

    setUser(user);
  };

  useEffect(() => {
    getLocalStrg();
  }, []);

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
          <div className='mt-2 profile-desc'>
            <p>
              <b>{user.email}</b>
            </p>
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
