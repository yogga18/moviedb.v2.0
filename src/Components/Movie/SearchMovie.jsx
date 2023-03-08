import React, { useState } from 'react';
import { Button, Col, Container, Input, Row } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchMovie = ({ displayHide }) => {
  const [query, setQuery] = useState('');

  const search = () => {
    if (query === '') {
      displayHide({
        hide: false,
        query: query,
      });
    } else {
      displayHide({
        hide: true,
        query: query,
      });
    }
  };

  return (
    <Container>
      <Row className='mb-5'>
        <Col md='12'>
          <div className='d-flex gap-1 align-items-center'>
            <Input
              placeholder='Search Movie.....'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query === '' ? (
              <Button outline color='danger' onClick={search}>
                🗑️
              </Button>
            ) : (
              <Button outline color='primary' onClick={search}>
                🔍
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

SearchMovie.propsTypes = {
  displayHide: PropTypes.func,
};

export default SearchMovie;
