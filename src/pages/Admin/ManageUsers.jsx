import React, { Fragment, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from 'reactstrap';
import CardManageusers from '../../Components/Admin/CardManageusers';
import Navigation from '../../Components/Navigation/Navigation';

const ManageUsers = () => {
  const [judul, setJudul] = useState('');
  const [sotBy, setSortBy] = useState('');

  const handleSearch = () => {
    console.log('judul', judul);
    console.log('sotBy', sotBy);
  };

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <p className='text-end my-3'>Manage Users</p>
        <Row className='gx-5 mx-3 manage-user-page-wrapper'>
          <Col md={4} className='side-a-wrapper mb-5'>
            <Card className='card-side-a-wrapper'>
              <CardHeader>
                <p className='text-dark m-0'>
                  <b>Search Users</b>
                </p>
              </CardHeader>
              <CardBody>
                <div>
                  <Input
                    type='text'
                    className='form-control my-3'
                    value={judul}
                    onChange={(e) => {
                      setJudul(e.target.value);
                    }}
                    placeholder='Search Users'
                  />
                </div>
                <div>
                  <select
                    className='form-control'
                    defaultValue=''
                    onChange={(e) => {
                      setSortBy(e.target.value);
                    }}
                  >
                    <option value={''} disabled>
                      Sort By
                    </option>
                    <option value={'dec'}>Admin</option>
                    <option value={'asc'}>Member</option>
                  </select>
                </div>
              </CardBody>
              <CardFooter>
                <Button
                  color='primary'
                  onClick={() => {
                    handleSearch();
                  }}
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={8} className='side-b-wrapper'>
            <CardManageusers
              email={'Exanple@email.com'}
              date={'01 Januari 2001'}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ManageUsers;
