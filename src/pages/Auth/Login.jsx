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
  Spinner,
} from 'reactstrap';
import Navigation from '../../Components/Navigation/Navigation';
import './Auth.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginWithEmail,
  // registerWithGoogle,
  getRoleUser,
} from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import utilities from '../../helpers/utilities';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password1, setPassword1] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const { login } = useSelector((state) => state.AuthReducer);

  const showPassword1 = () => {
    setPassword1(!password1);
  };

  const handleEmailLogin = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    if (isVerified) {
      dispatch(loginWithEmail(payload)).then((response) => {
        if (response.success) {
          checkingRole(response.data);
        } else {
          toast.warning(response.error.message);
        }
      });
    } else {
      toast.warning('Please verify that you are not a robot');
    }
  };

  const handleGoogleLogin = () => {
    toast.info('We Found Bug in this feature 😢, please use email for login');
    // dispatch(registerWithGoogle()).then((response) => {
    //   if (response.success) {
    //     let user = {
    //       email: response.data.user.email,
    //       emailVerified: response.data.user.emailVerified,
    //       refreshToken: response.data.user.refreshToken,
    //       accessToken: response.data.user.accessToken,
    //       uid: response.data.user.uid,
    //       photoURL: response.data.user.photoURL || '',
    //       role: 'user',
    //     };

    //     const encryptedToken = utilities.encLocalStrg(user);

    //     localStorage.setItem('user', encryptedToken);
    //     localStorage.setItem('isRegis', true);
    //     localStorage.setItem('isLogin', true);

    //     navigate('/dashboard');
    //   } else {
    //     toast.warning(response.error.message);
    //   }
    // });
  };

  const checkingRole = async (response) => {
    dispatch(getRoleUser(response.user)).then((response) => {
      if (response.success) {
        const encryptedToken = utilities.encLocalStrg(response.data);

        localStorage.setItem('user', encryptedToken);
        localStorage.setItem('isRegis', true);
        localStorage.setItem('isLogin', true);

        if (response.data.role === 'user') {
          navigate('/dashboard');
        } else {
          navigate('/dashboard-admin');
        }
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
    onSubmit: handleEmailLogin,
  });

  const handleReCapcha = (response) => {
    if (response) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

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

                  <ReCAPTCHA
                    sitekey='6LfrEYIlAAAAAMm0dVHE_ZL8asnKjUKg2kQH0QXp'
                    onChange={handleReCapcha}
                  />

                  <div className='mt-5 d-flex gap-3 justify-content-end'>
                    <Button
                      color='danger'
                      onClick={handleGoogleLogin}
                      disabled={login.isLoading}
                    >
                      {login.isLoading ? <Spinner color='light' /> : 'Google'}
                    </Button>
                    <Button
                      type='submit'
                      color='primary'
                      disabled={login.isLoading}
                      className='px-3'
                    >
                      {login.isLoading ? <Spinner color='light' /> : 'Login'}
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
