import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navigation from '../../Components/Navigation/Navigation';
import OffcanvasComponent from '../../Components/Navigation/Sidebar/OffcanvasComponent';

const DashboardAdmin = () => {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <Row className='mt-3'>
          <Col md={12}>
            <OffcanvasComponent />
            <h1 className='text-center'>Admin Dashboard</h1>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DashboardAdmin;
