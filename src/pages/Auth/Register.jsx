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
import { registerWithEmail } from '../../store/actions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password1, setPassword1] = useState(true);
  const [password2, setPassword2] = useState(true);

  const { regisWithEmail } = useSelector((state) => state.AuthReducer);

  const showPassword1 = () => {
    setPassword1(!password1);
  };

  const showPassword2 = () => {
    setPassword2(!password2);
  };

  const handleRegisterSubmit = (payload) => {
    dispatch(registerWithEmail(payload)).then((response) => {
      if (response.success) {
        toast.success('Register Success');
        navigate('/login');
      } else {
        toast.warning(response.error.message);
      }
    });
  };

  const save = (values) => {
    const payload = {
      email: values.email,
      username: values.username,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    handleRegisterSubmit(payload);
  };

  const formik = useFormik({
    // 1. Initial values
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    // 2. Validation schema
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      username: Yup.string().required('Required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /[a-z]/g,
          'Password must contain at least 1 lowercase letter ❗'
        )
        .matches(
          /[A-Z]/g,
          'Password must contain at least 1 uppercase letter ❗'
        )
        .matches(/[0-9]/g, 'Password must contain at least 1 digit ❗')
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/g,
          'Password must contain at least 1 special character ❗'
        )
        .matches(/^\S*$/, 'Password cannot contain spaces ❗'),
      confirmPassword: Yup.string()
        .required('Password confirmation is required ❗')
        .oneOf(
          [Yup.ref('password')],
          'The password you entered is not the same ❗'
        ),
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
            <Card className='register-wrapper'>
              <CardHeader>
                <b className='text-dark'>Register</b>
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

                  <FormGroup>
                    <Label>
                      <b className='text-dark'>Confirm Password</b>{' '}
                      <b className='text-danger'>*</b>
                    </Label>
                    <div className='d-flex gap-1'>
                      <Input
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        type={password2 ? 'password' : 'text'}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <Button
                        size='sm'
                        onClick={() => {
                          showPassword2();
                        }}
                        color='primary'
                      >
                        {password2 ? '🥷' : '👋'}
                      </Button>
                    </div>
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className='text-danger'>
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </FormGroup>

                  <Button
                    type='submit'
                    color='primary'
                    className='mt-2'
                    disabled={regisWithEmail.isLoading}
                  >
                    Register
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

export default Register;
