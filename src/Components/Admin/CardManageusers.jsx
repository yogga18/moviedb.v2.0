import React, { Fragment } from 'react';
import { Badge, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import './AdminComponents.scss';
import { useNavigate } from 'react-router';

const CardManageusers = ({ data }) => {
  const navigate = useNavigate();

  const convertDateFirebase = (date) => {
    return new Date(date?.seconds * 1000).toLocaleDateString();
  };

  const goToSomeWhere = (id) => {
    navigate(`/manage-users/${id}`);
  };

  return (
    <Fragment>
      {data?.map((item) => (
        <Card
          className='card-side-b-wrapper mb-3'
          key={item.id_document}
          onClick={() => {
            goToSomeWhere(item.id_document);
          }}
        >
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
