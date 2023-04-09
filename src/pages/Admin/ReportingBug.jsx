import React, { Fragment, useState } from 'react';
import { Badge, Button, ButtonGroup, Col, Container, Row } from 'reactstrap';
import CardReportingBug from '../../Components/Admin/CardReportingBug';
import Navigation from '../../Components/Navigation/Navigation';
import './Admin.scss';

const ReportingBug = () => {
  const [rSelected, setRSelected] = useState(1);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5 reporting-bug-page-wrapper'>
        {/* <Row className='my-3'>
          <Col md='12'>
            <h4>Bug Reporting</h4>
          </Col>
        </Row> */}
        <p>s</p>
        <ButtonGroup
          size='sm'
          className='d-flex justify-content-center m-auto gap-3'
        >
          <Button
            color='primary'
            outline
            onClick={() => setRSelected(1)}
            active={rSelected === 1}
            style={{ borderRadius: '8px 8px 8px 8px' }}
            className='px-4 py-2'
          >
            Pending <Badge>4</Badge>
          </Button>
          <Button
            color='primary'
            outline
            onClick={() => setRSelected(2)}
            active={rSelected === 2}
            style={{ borderRadius: '8px 8px 8px 8px' }}
          >
            Progress <Badge>4</Badge>
          </Button>
          <Button
            color='primary'
            outline
            onClick={() => setRSelected(3)}
            active={rSelected === 3}
            style={{ borderRadius: '8px 8px 8px 8px' }}
          >
            Done <Badge>4</Badge>
          </Button>
          <Button
            color='primary'
            outline
            onClick={() => setRSelected(4)}
            active={rSelected === 4}
            style={{ borderRadius: '8px 8px 8px 8px' }}
          >
            Decline <Badge>4</Badge>
          </Button>
        </ButtonGroup>
        <Row>
          <Col md={12}>
            {rSelected === 1 ? (
              <CardReportingBug title={'Pending'} />
            ) : rSelected === 2 ? (
              <CardReportingBug title={'Progres'} />
            ) : rSelected === 3 ? (
              <CardReportingBug title={'Done'} />
            ) : (
              <CardReportingBug title={'Decline'} />
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ReportingBug;
