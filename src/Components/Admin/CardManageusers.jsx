import React, { Fragment } from 'react';
import { Badge, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import './AdminComponents.scss';

const CardManageusers = ({ data }) => {
  const convertDateFirebase = (date) => {
    return new Date(date?.seconds * 1000).toLocaleDateString();
  };

  return (
    <Fragment>
      {data?.map((item) => (
        <Card className='card-side-b-wrapper mb-3' key={item.id_document}>
          <CardBody>
            <div className='d-flex justify-content-end'>
              <p>
                Join At : <b>{convertDateFirebase(item.joinAt)}</b>
              </p>
            </div>
            <p>
              Email : <b>{item.email}</b>
            </p>
            Role :{' '}
            <Badge color={item.role === 'user' ? 'primary' : 'warning'}>
              {item.role}
            </Badge>
          </CardBody>
        </Card>
      ))}
    </Fragment>
  );
};

CardManageusers.propTypes = {
  email: PropTypes.string,
  date: PropTypes.string,
  data: PropTypes.array,
};

export default CardManageusers;
