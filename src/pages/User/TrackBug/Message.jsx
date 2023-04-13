import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import utilities from '../../../helpers/utilities';
import { fetchAllBugsUserSide } from '../../../store/actions';
import CardReportingBug from '../../../Components/Admin/CardReportingBug';
import FormSearch from '../../../Components/FormSearch/FormSearch';
import Navigation from '../../../Components/Navigation/Navigation';

const Message = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem('user');
  const decUser = utilities.decLocalStrg(user);

  const [dataFilter, setDataFilter] = useState([]);

  const [flagSearch, setFlagSearch] = useState(true);

  const { getAllBugsUserSide } = useSelector((state) => state.BugReducer);

  const handleSearch = (values) => {
    const { judul, sortBy } = values;

    const dataSearch = getAllBugsUserSide.data
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

    setFlagSearch(!flagSearch);
    setDataFilter(dataSearch);
  };

  useEffect(() => {
    dispatch(fetchAllBugsUserSide(decUser?.uid));
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <p className='text-end my-3 me-3'>
          <b>Track Bug Reporting</b>
        </p>

        <Row className='gx-5 m-3'>
          <Col md={4}>
            <FormSearch handleSearch={handleSearch} />
          </Col>
          <Col md={8}>
            {!flagSearch && (
              <CardReportingBug data={dataFilter} basePath={'messages'} />
            )}
            {!flagSearch &&
              dataFilter.length === 0 &&
              getAllBugsUserSide.isLoading === false && (
                <p className='text-center'>Data Not Found</p>
              )}
            {flagSearch && (
              <CardReportingBug
                data={getAllBugsUserSide.data}
                basePath={'messages'}
              />
            )}
            {flagSearch &&
              getAllBugsUserSide.data.length === 0 &&
              getAllBugsUserSide.isLoading === false && (
                <p className='text-center'>Data Not Yet</p>
              )}
            {getAllBugsUserSide.isLoading && (
              <p className='text-center'>Loading....</p>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Message;
