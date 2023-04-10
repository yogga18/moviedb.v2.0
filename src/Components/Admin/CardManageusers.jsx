import React from 'react';
import { Card, CardBody, CardFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import './AdminComponents.scss';

const CardManageusers = ({ email, date }) => {
  return (
    <Card className='card-side-b-wrapper'>
      <CardBody>
        <p className='text-dark'>{email}</p>
      </CardBody>
      <CardFooter>
        <p className='text-dark m-0'>{date}</p>
      </CardFooter>
    </Card>
  );
};

CardManageusers.PropTypes = {
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CardManageusers;
