import React, { Fragment } from 'react';
import { Badge, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import './AdminComponents.scss';
import { useNavigate } from 'react-router-dom';

const CardReportingBug = ({ data }) => {
  const navigate = useNavigate();

  const handlerGoToSomeWhere = (path) => {
    navigate(path);
  };

  return (
    <Fragment>
      {data.map((item) => (
        <Card
          key={item.id}
          className='p-2 mb-3 card-bug-report-wrapper'
          onClick={() => {
            handlerGoToSomeWhere(`/reporting-bug/${item.id}`);
          }}
        >
          <CardBody>
            <div className='d-flex justify-content-end gap-3'>
              <Badge
                color={
                  item.status === 'Pending'
                    ? 'warning'
                    : item.status === 'Progress'
                    ? 'primary'
                    : item.status === 'Done'
                    ? 'success'
                    : 'danger'
                }
              >
                {item.status}
              </Badge>
            </div>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </CardBody>
        </Card>
      ))}
    </Fragment>
  );
};

CardReportingBug.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardReportingBug;
