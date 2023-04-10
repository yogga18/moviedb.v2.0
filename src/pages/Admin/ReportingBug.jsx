import React, { Fragment, useState } from 'react';
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from 'reactstrap';
import CardReportingBug from '../../Components/Admin/CardReportingBug';
import Navigation from '../../Components/Navigation/Navigation';
import './Admin.scss';

const ReportingBug = () => {
  const DataDummy = [
    {
      id: 1,
      title: 'Bug 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Bug 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Progress',
    },
    {
      id: 3,
      title: 'Bug 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Done',
    },
    {
      id: 4,
      title: 'Bug 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Decline',
    },
    {
      id: 5,
      title: 'Bug 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Pending',
    },
  ];

  const [rSelected, setRSelected] = useState(1);
  const [judul, setJudul] = useState('');
  const [sotBy, setSortBy] = useState('');

  // Pending
  const BugPending = (DataDummy || []).filter(
    (item) => item.status === 'Pending'
  );
  const countBugPending = BugPending.length;

  // Progress
  const BugProgress = (DataDummy || []).filter(
    (item) => item.status === 'Progress'
  );
  const countBugProgress = BugProgress.length;

  // Done
  const BugDone = (DataDummy || []).filter((item) => item.status === 'Done');
  const countBugDone = BugDone.length;

  // Decline
  const BugDecline = (DataDummy || []).filter(
    (item) => item.status === 'Decline'
  );
  const countBugDecline = BugDecline.length;

  // Func
  const handleSearch = () => {
    console.log('judul', judul);
    console.log('sotBy', sotBy);
  };

  // Logging
  console.log('DataDummy', DataDummy);

  console.log('BugPending', BugPending);
  console.log('countBugPending', countBugPending);

  console.log('BugProgress', BugProgress);
  console.log('countBugProgress', countBugProgress);

  console.log('BugDone', BugDone);
  console.log('countBugDone', countBugDone);

  console.log('BugDecline', BugDecline);
  console.log('countBugDecline', countBugDecline);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5 reporting-bug-page-wrapper'>
        <p className='text-end my-3'>Bug Reporting from User</p>
        <ButtonGroup
          size='sm'
          className='d-flex justify-content-center m-auto gap-3'
        >
          <Button
            color='warning'
            outline
            onClick={() => setRSelected(1)}
            active={rSelected === 1}
            style={{ borderRadius: '8px 8px 8px 8px' }}
            className='px-4 py-2'
          >
            <b className='text-dark'>Pending</b>{' '}
            <Badge>{countBugPending}</Badge>
          </Button>
          <Button
            color='primary'
            outline
            onClick={() => setRSelected(2)}
            active={rSelected === 2}
            style={{ borderRadius: '8px 8px 8px 8px' }}
          >
            Progress <Badge>{countBugProgress}</Badge>
          </Button>
          <Button
            color='success'
            outline
            onClick={() => setRSelected(3)}
            active={rSelected === 3}
            style={{ borderRadius: '8px 8px 8px 8px' }}
          >
            <b className='text-dark'>Done</b> <Badge>{countBugDone}</Badge>
          </Button>
          <Button
            color='danger'
            outline
            onClick={() => setRSelected(4)}
            active={rSelected === 4}
            style={{ borderRadius: '8px 8px 8px 8px' }}
          >
            <b className='text-dark'>Decline</b>{' '}
            <Badge>{countBugDecline}</Badge>
          </Button>
        </ButtonGroup>
        <Row className='gx-5 m-3'>
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
          <Col md={8}>
            {rSelected === 1 ? (
              <CardReportingBug data={BugPending} />
            ) : rSelected === 2 ? (
              <CardReportingBug data={BugProgress} />
            ) : rSelected === 3 ? (
              <CardReportingBug data={BugDone} />
            ) : (
              <CardReportingBug data={BugDecline} />
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ReportingBug;
