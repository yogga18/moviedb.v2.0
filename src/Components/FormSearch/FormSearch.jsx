import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  CardFooter,
} from 'reactstrap';
import './FormSearch.scss';

const FormSearch = ({ handleSearch }) => {
  const [judul, setJudul] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearchChange = () => {
    const payload = {
      judul,
      sortBy,
    };

    handleSearch(payload);
  };

  return (
    <Fragment>
      <Card className='form-search-notification-wrapper'>
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
              handleSearchChange();
            }}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

FormSearch.popTypes = {
  handleSearch: PropTypes.func,
};

export default FormSearch;
