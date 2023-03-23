import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { Fragment, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import Navigation from '../../Components/Navigation/Navigation';
import './Auth.scss';

const Login = () => {
  const [password1, setPassword1] = useState(true);

  const showPassword1 = () => {
    setPassword1(!password1);
  };

  const save = (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };

    console.log(payload);
  };

  const formik = useFormik({
    // 1. Initial values
    initialValues: {
      username: '',
      password: '',
    },
    // 2. Validation schema
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    }),
    // 3. Submit handler
    onSubmit: save,
  });

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <Row className='mt-5'>
          <Col md='3'></Col>
          <Col md='6'>
            <Card className='login-wrapper'>
              <CardHeader>
                <b className='text-dark'>Login</b>
              </CardHeader>
              <CardBody>
                <form onSubmit={formik.handleSubmit}>
                  <FormGroup>
                    <Label>
                      <b className='text-dark'>Username</b>{' '}
                      <b className='text-danger'>*</b>
                    </Label>
                    <Input
                      placeholder='Username'
                      name='username'
                      type='text'
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <div className='text-danger'>
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label>
                      <b className='text-dark'>Password</b>{' '}
                      <b className='text-danger'>*</b>
                    </Label>
                    <div className='d-flex gap-1'>
                      <Input
                        placeholder='Password'
                        name='password'
                        type={password1 ? 'password' : 'text'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <Button
                        size='sm'
                        onClick={() => {
                          showPassword1();
                        }}
                        color='primary'
                      >
                        {password1 ? '🥷' : '👋'}
                      </Button>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className='text-danger'>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </FormGroup>

                  <Button type='submit' color='primary' className='mt-2'>
                    Login
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
