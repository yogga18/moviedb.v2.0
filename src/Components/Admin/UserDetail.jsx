import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from 'reactstrap';
import { fetcUserById } from '../../store/actions';
import Navigation from '../Navigation/Navigation';

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { getUserById } = useSelector((state) => state.AuthReducer);

  const handleFetch = () => {
    const payload = {
      id,
    };

    dispatch(fetcUserById(payload));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  console.log('getUserById', getUserById);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h1 className='mt-3 text-center'>UserDetail</h1>
      </Container>
    </Fragment>
  );
};

export default UserDetail;
