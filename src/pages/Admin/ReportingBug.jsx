import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  Spinner,
} from 'reactstrap';
import CardReportingBug from '../../Components/Admin/CardReportingBug';
import Navigation from '../../Components/Navigation/Navigation';
import { fetchAllBugs } from '../../store/actions';
import './Admin.scss';

const ReportingBug = () => {
  const dispatch = useDispatch();

  const [rSelected, setRSelected] = useState(1);
  const [judul, setJudul] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [flagSearch, setFlagSearch] = useState(true);

  const { getAllBugs } = useSelector((state) => state.BugReducer);

  const [filterBugPending, setFilterBugPending] = useState([]);
  const [filterBugProgress, setFilterBugProgress] = useState([]);
  const [filterBugDone, setFilterBugDone] = useState([]);
  const [filterBugDecline, setFilterBugDecline] = useState([]);

  console.log('materi', getAllBugs.data);

  // Pending
  const BugPending = (getAllBugs.data || []).filter(
    (item) => item.status === 'Pending'
  );
  const countBugPending = BugPending.length;

  // Progress
  const BugProgress = (getAllBugs.data || []).filter(
    (item) => item.status === 'Progress'
  );
  const countBugProgress = BugProgress.length;

  // Done
  const BugDone = (getAllBugs.data || []).filter(
    (item) => item.status === 'Done'
  );
  const countBugDone = BugDone.length;

  // Decline
  const BugDecline = (getAllBugs.data || []).filter(
    (item) => item.status === 'Decline'
  );
  const countBugDecline = BugDecline.length;

  // Func
  const handleSearch = () => {
    if (rSelected === 1) {
      const filterBug = BugPending.filter((item) => {
        return item.title.toLowerCase().includes(judul.toLowerCase());
      }).sort((a, b) => {
        if (sortBy === 'asc') {
          return a.title.localeCompare(b.title);
        } else if (sortBy === 'desc') {
          return b.title.localeCompare(a.title);
        }
      });

      setFilterBugPending(filterBug);
      setFlagSearch(!flagSearch);
    } else if (rSelected === 2) {
      const filterBug = BugProgress.filter((item) => {
        return item.title.toLowerCase().includes(judul.toLowerCase());
      }).sort((a, b) => {
        if (sortBy === 'asc') {
          return a.title.localeCompare(b.title);
        } else if (sortBy === 'desc') {
          return b.title.localeCompare(a.title);
        }
      });

      setFilterBugProgress(filterBug);
      setFlagSearch(!flagSearch);
    } else if (rSelected === 3) {
      const filterBug = BugDone.filter((item) => {
        return item.title.toLowerCase().includes(judul.toLowerCase());
      }).sort((a, b) => {
        if (sortBy === 'asc') {
          return a.title.localeCompare(b.title);
        } else if (sortBy === 'desc') {
          return b.title.localeCompare(a.title);
        }
      });

      setFilterBugDone(filterBug);
      setFlagSearch(!flagSearch);
    } else {
      const filterBug = BugDecline.data
        .filter((item) => {
          return item.title.toLowerCase().includes(judul.toLowerCase());
        })
        .sort((a, b) => {
          if (sortBy === 'asc') {
            return a.title.localeCompare(b.title);
          } else if (sortBy === 'desc') {
            return b.title.localeCompare(a.title);
          }
        });

      setFilterBugDecline(filterBug);
      setFlagSearch(!flagSearch);
    }
  };

  useEffect(() => {
    dispatch(fetchAllBugs());
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5 reporting-bug-page-wrapper'>
        <p className='text-end my-3 me-3'>
          <b>Bug Reporting from User</b>
        </p>
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
          <Col md={4} className='side-a-reporting-bug-wrapper mb-5'>
            <Card className='card-side-a-reporting-bug-wrapper'>
              <CardHeader>
                <p className='text-dark m-0'>
                  <b>Form Search</b>
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
                    placeholder='🪲🔍'
                  />
                </div>
                <div>
                  <select
                    className='form-control'
                    defaultValue='desc'
                    onChange={(e) => {
                      setSortBy(e.target.value);
                    }}
                  >
                    <option value={'desc'}>Desc</option>
                    <option value={'asc'}>Asc</option>
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
            {getAllBugs.isLoading && <Spinner color='info' />}
            {rSelected === 1 ? (
              <>
                {flagSearch ? (
                  <CardReportingBug
                    data={BugPending}
                    basePath={'reporting-bug'}
                  />
                ) : !flagSearch && filterBugPending.length === 0 ? (
                  <p>Report Bug Not Found</p>
                ) : (
                  <CardReportingBug
                    data={filterBugPending}
                    basePath={'reporting-bug'}
                  />
                )}
              </>
            ) : rSelected === 2 ? (
              <>
                {flagSearch ? (
                  <CardReportingBug
                    data={BugProgress}
                    basePath={'reporting-bug'}
                  />
                ) : !flagSearch && filterBugProgress.length === 0 ? (
                  <p>Report Bug Not Found</p>
                ) : (
                  <CardReportingBug
                    data={filterBugProgress}
                    basePath={'reporting-bug'}
                  />
                )}
              </>
            ) : rSelected === 3 ? (
              <>
                {flagSearch ? (
                  <CardReportingBug data={BugDone} basePath={'reporting-bug'} />
                ) : !flagSearch && filterBugDone.length === 0 ? (
                  <p>Report Bug Not Found</p>
                ) : (
                  <CardReportingBug
                    data={filterBugDone}
                    basePath={'reporting-bug'}
                  />
                )}
              </>
            ) : (
              <>
                {flagSearch ? (
                  <CardReportingBug
                    data={BugDecline}
                    basePath={'reporting-bug'}
                  />
                ) : !flagSearch && filterBugDecline.length === 0 ? (
                  <p>Report Bug Not Found</p>
                ) : (
                  <CardReportingBug
                    data={filterBugDecline}
                    basePath={'reporting-bug'}
                  />
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ReportingBug;
