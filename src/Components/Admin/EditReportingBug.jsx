import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Select from 'react-select';
import { toast } from 'react-toastify';
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
import { fetchBugById, putBug } from '../../store/actions';
import Navigation from '../Navigation/Navigation';

const EditReportingBug = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [statusState, setStatusState] = useState('');

  const { getBugsById } = useSelector((state) => state.BugReducer);

  const statusBug = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Progress', label: 'Progress' },
    { value: 'Decline', label: 'Decline' },
    { value: 'Done', label: 'Done' },
  ];

  const handleNavigate = () => {
    navigate('/reporting-bug');
  };

  const handleFetch = () => {
    const payload = {
      id,
    };

    dispatch(fetchBugById(payload));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      description: getBugsById.data.description,
      id_document: getBugsById.data.id_document,
      image: getBugsById.data.image,
      status: statusState,
      title: getBugsById.data.title,
      timeStamp: getBugsById.data.timeStamp,
      uuid: getBugsById.data.uuid,
    };

    dispatch(putBug(payload)).then((res) => {
      if (res.success) {
        toast.success('Success Update Bug');
        handleNavigate();
      } else {
        toast.error('Failed Update Bug');
      }
    });
  };

  useEffect(() => {
    handleFetch();
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
                          isDisabled={getBugsById.isLoadong}
                          classNamePrefix='select2-selection'
                          className='form-select-control'
                          onChange={(e) => setStatusState(e.value)}
                          value={
                            statusBug.find(
                              (option) => option.value === statusState
                            ) || ''
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
                  <div className='d-flex justify-content-end'>
                    <Button
                      color='primary'
                      type='submit'
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </CardBody>
            )}
          </Card>
        </div>
      </Container>
    </Fragment>
  );
};

export default EditReportingBug;
