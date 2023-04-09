import React from 'react';
import { Card } from 'reactstrap';
import PropTypes from 'prop-types';

const CardReportingBug = ({ title }) => {
  return (
    <Card
      className='m-5 p-2'
      style={{
        backgroundColor: '#aeb4b8',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        border: 'none',
      }}
    >
      <p>{title}</p>
    </Card>
  );
};

CardReportingBug.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardReportingBug;
