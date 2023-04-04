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
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmail, registerWithGoogle } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import encdec from '../../../encdec.js';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password1, setPassword1] = useState(true);

  const { login } = useSelector((state) => state.AuthReducer);

  const showPassword1 = () => {
    setPassword1(!password1);
  };

  const save = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    dispatch(loginWithEmail(payload)).then((response) => {
      // console.log('response', response);
      if (response.success) {
        let user = {
          email: response.data.user.email,
          emailVerified: response.data.user.emailVerified,
          refreshToken: response.data.user.refreshToken,
          accessToken: response.data.user.accessToken,
          uid: response.data.user.uid,
          photoURL: response.data.user.photoURL || '',
        };

        const encryptedToken = encdec.encLocalStrg(user);

        localStorage.setItem('user', encryptedToken);

        navigate('/dashboard');
      } else {
        toast.warning(response.error.message);
      }
    });
  };

  const handleGoogleLogin = () => {
    dispatch(registerWithGoogle()).then((response) => {
      if (response.success) {
        let user = {
          email: response.data.user.email,
          emailVerified: response.data.user.emailVerified,
          refreshToken: response.data.user.refreshToken,
          accessToken: response.data.user.accessToken,
          uid: response.data.user.uid,
          photoURL: response.data.user.photoURL || '',
        };

        localStorage.setItem('user', JSON.stringify(user));

        navigate('/dashboard');
      } else {
        toast.warning(response.error.message);
      }
    });
  };

  const formik = useFormik({
    // 1. Initial values
    initialValues: {
      email: '',
      password: '',
    },
    // 2. Validation schema
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
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
                      <b className='text-dark'>Email</b>{' '}
                      <b className='text-danger'>*</b>
                    </Label>
                    <Input
                      placeholder='Email'
                      name='email'
                      type='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className='text-danger'>{formik.errors.email}</div>
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

                  <div className='mt-2 d-flex gap-3'>
                    <Button type='submit' color='primary'>
                      Login
                    </Button>
                    <Button color='danger' onClick={handleGoogleLogin}>
                      Google
                    </Button>
                  </div>
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
