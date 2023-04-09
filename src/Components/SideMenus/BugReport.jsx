import { useFormik } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import Navigation from '../Navigation/Navigation';
import * as Yup from 'yup';
import utilities from '../../helpers/utilities';
import { serverTimestamp } from 'firebase/firestore';
import { storage } from '../../config/firebase';
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import { postBugReports } from '../../store/actions';
import { toast } from 'react-toastify';

const BugReport = () => {
  // Aditional Variable
  const dispatch = useDispatch();
  const encUserLocalStrg = localStorage.getItem('user');
  const user = utilities.decLocalStrg(encUserLocalStrg);

  // State
  const [image, setImage] = useState();
  const [fileUpload, setFileUpload] = useState();

  // Redux Store
  const { postBugReportsReducer } = useSelector((state) => state.BugReducer);

  // Func
  const handlerSubmit = async (values) => {
    let resImageFromServer;

    const name = new Date().getTime() + image.name;
    const storageRef = ref(storage, image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);

    await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setFileUpload(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;

            case 'running':
              console.log('Upload is running');
              break;

            default:
              brake;
          }
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resImageFromServer = downloadURL;
              resolve();
            })
            .catch((error) => {
              toast.warning(error.message);
              reject(error);
            });
        }
      );
    });

    const payload = {
      uuid: user.uid,
      title: values.title,
      description: values.description,
      timeStamp: serverTimestamp(),
      image: resImageFromServer,
      status: 'pending',
    };

    dispatch(postBugReports(payload)).then((response) => {
      if (response.success) {
        toast.success('Your report has been sent successfully');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.warning('Something went wrong, please try again later');
      }
    });
  };

  const formik = useFormik({
    // 1. Initialize the form values
    initialValues: {
      title: '',
      description: '',
    },

    // 2. Validation schema
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Required')
        .max(25, 'Must be 25 characters or less'),
      description: Yup.string()
        .required('Required')
        .max(100, 'Must be 100 characters or less'),
    }),

    onSubmit: handlerSubmit,
  });

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <h5 className='text-center my-5'>STATEMENT</h5>
        <p className='text-center m-auto w-50'>
          " If you encounter any bugs or errors in the system, please report
          them by filling out the form below. Please provide a clear description
          and attach any relevant screenshots to help us identify and address
          the issue. Thank you for your cooperation in helping us improve the
          system. "
        </p>
        <Row className='mt-5'>
          <Col md={8} sx={8} sm={8} lg={8} xl={8} className='m-auto'>
            <Form
              onSubmit={formik.handleSubmit}
              className='p-2'
              style={{
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
              }}
            >
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      <b>Title </b>
                      <b className='text-danger'>*</b>
                    </Label>
                    <Input
                      placeholder='Title'
                      name='title'
                      type='text'
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title ? (
                      <div className='text-danger'>{formik.errors.title}</div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      <b>Screenshots </b>
                      <b className='text-danger'>*</b>
                    </Label>
                    <Input
                      placeholder='img'
                      type='file'
                      id='file'
                      accept='image/*'
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Label>{fileUpload}</Label>

              <FormGroup>
                <Label>
                  <b>Description </b>
                  <b className='text-danger'>*</b>
                </Label>
                <Input
                  placeholder='Description'
                  name='description'
                  type='textarea'
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className='text-danger'>{formik.errors.description}</div>
                ) : null}
              </FormGroup>

              <div className='d-flex justify-content-end mb-3'>
                <Button
                  type='submit'
                  color='primary'
                  disabled={
                    (fileUpload !== null && fileUpload < 100) ||
                    postBugReportsReducer.isLoading
                  }
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BugReport;
