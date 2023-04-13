import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from 'reactstrap';
import { fetchBugById } from '../../store/actions';
import Navigation from '../Navigation/Navigation';

const EditReportingBug = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { getBugsById } = useSelector((state) => state.BugReducer);

  const handleFetch = () => {
    const payload = {
      id,
    };

    dispatch(fetchBugById(payload));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  console.log(getBugsById);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <p className='text-center mt-5'>Get Reporting Bug By Id</p>
      </Container>
    </Fragment>
  );
};

export default EditReportingBug;
