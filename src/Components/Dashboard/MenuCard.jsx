import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const MenuCard = ({ title, value, bgColor, detailPath }) => {
  return (
    <Col sm='4' md='4' lg='3'>
      <Card className='mb-3'>
        <CardBody>
          <div className='d-flex'>
            <div className='flex-grow-1'>
              <p className='text-dark'>
                <b>{title}</b>
              </p>
              <h4 className='mb-0 text-end'>{value}</h4>
            </div>
            {/* <div className='align-self-center'>
              <i className='bi bi-airplane-engines-fill'></i>
            </div> */}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string,
  detailPath: PropTypes.string,
  value: PropTypes.number,
};

export default MenuCard;
