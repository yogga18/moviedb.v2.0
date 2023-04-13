import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  Spinner,
} from 'reactstrap';
import CardManageusers from '../../Components/Admin/CardManageusers';
import Navigation from '../../Components/Navigation/Navigation';
import { fetchAllUsers } from '../../store/actions';
import './Admin.scss';

const ManageUsers = () => {
  const dispatch = useDispatch();

  const [judul, setJudul] = useState('');
  const [sotBy, setSortBy] = useState('');
  const [flagSearch, setFlagSearch] = useState(true);
  const [userSearch, setUserSearch] = useState([]);

  const { getAllUsers } = useSelector((state) => state.AuthReducer);

  const handleSearch = () => {
    const filterUsers = getAllUsers.data
      .filter((item) => {
        return item.email.toLowerCase().includes(judul.toLowerCase());
      })
      .sort((a, b) => {
        if (sotBy === 'asc') {
          return a.email.localeCompare(b.email);
        } else if (sotBy === 'desc') {
          return b.email.localeCompare(a.email);
        }
      });

    setUserSearch(filterUsers);
    setFlagSearch(!flagSearch);
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  console.log('user', getAllUsers);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h5 className='text-end my-3 me-3'>Manage Users Pages</h5>
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
                    placeholder='Search Users by Email'
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
          <Col md={8} className='side-b-wrapper'>
            {getAllUsers.isLoading && <Spinner color='primary' />}
            {flagSearch ? (
              <CardManageusers data={getAllUsers.data} />
            ) : !flagSearch && userSearch.length === 0 ? (
              <p>Data Tidak Ditemukan</p>
            ) : (
              <CardManageusers data={userSearch} />
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ManageUsers;
