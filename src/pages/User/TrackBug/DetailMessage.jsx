import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from 'reactstrap';
import Navigation from '../../../Components/Navigation/Navigation';
import { fetchBugById } from '../../../store/actions';
import Select from 'react-select';

const DetailMessage = () => {
  const statusBug = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Progress', label: 'Progress' },
    { value: 'Decline', label: 'Decline' },
    { value: 'Done', label: 'Done' },
  ];

  const { id } = useParams();
  const dispatch = useDispatch();

  const [statusState, setStatusState] = useState('');

  const { getBugsById } = useSelector((state) => state.BugReducer);

  const handleBugById = (id) => {
    const payload = {
      id,
    };
    dispatch(fetchBugById(payload));
  };

  useEffect(() => {
    handleBugById(id);
  }, []);

  useEffect(() => {
    if (getBugsById && getBugsById.data) {
      setStatusState(getBugsById.data.status);
    }
  }, [getBugsById]);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='py-5'>
        <div className='m-auto w-75'>
          <Card className='mt-5'>
            {getBugsById.isLoading ? (
              <Spinner color='danger' />
            ) : (
              <CardBody>
                <CardImg alt='Card image cap' src={getBugsById.data.image} />

                <div className='d-flex justify-content-end mt-5'>
                  <Badge
                    color={
                      getBugsById.data.status === 'Pending'
                        ? 'warning'
                        : getBugsById.data.status === 'Progress'
                        ? 'primary'
                        : getBugsById.data.status === 'Done'
                        ? 'success'
                        : 'danger'
                    }
                  >
                    {getBugsById.data.status}
                  </Badge>
                </div>
                <Form>
                  <Row>
                    <Col md={7}>
                      <FormGroup>
                        <Label>
                          <b>Title</b>
                        </Label>
                        <Input
                          type='text'
                          placeholder='Title'
                          defaultValue={getBugsById.data.title}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md={5}>
                      <FormGroup>
                        <Label>
                          <b>Status</b>
                        </Label>
                        <Select
                          options={statusBug}
                          isDisabled={true}
                          classNamePrefix='select2-selection'
                          className='form-select-control'
                          onChange={(e) => setStatusState(e.value)}
                          value={
                            statusBug.find(
                              (option) =>
                                option.value === getBugsById.data.status
                            ) ?? ''
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label>
                      <b>Description</b>
                    </Label>
                    <Input
                      type='textarea'
                      placeholder='Description'
                      value={getBugsById.data.description}
                      disabled
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            )}
          </Card>
        </div>
      </Container>
    </Fragment>
  );
};

export default DetailMessage;
