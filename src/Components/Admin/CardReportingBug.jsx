import React, { Fragment } from 'react';
import { Badge, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import './AdminComponents.scss';
import { useNavigate } from 'react-router-dom';

const CardReportingBug = ({ data, basePath }) => {
  const navigate = useNavigate();

  const handlerGoToSomeWhere = (path) => {
    navigate(path);
  };

  const convertDateFirebase = (date) => {
    return new Date(date.seconds * 1000).toLocaleDateString();
  };

  return (
    <Fragment>
      {data?.map((item) => (
        <Card
          key={item.id_document}
          className='p-2 mb-3 card-bug-report-wrapper'
          onClick={() => {
            handlerGoToSomeWhere(`/${basePath}/${item.id_document}`);
          }}
        >
          <CardBody>
            <div className='d-flex justify-content-between gap-3'>
              <p>
                Created At : <b>{convertDateFirebase(item.timeStamp)}</b>
              </p>
              <div>
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
  basePath: PropTypes.string.isRequired,
};

export default CardReportingBug;
