import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row, Spinner } from 'reactstrap';
import MenuCard from '../../Components/Dashboard/MenuCard';
import Navigation from '../../Components/Navigation/Navigation';
import OffcanvasComponent from '../../Components/Navigation/Sidebar/OffcanvasComponent';
import { fetchAllBugs, fetchAllUsers } from '../../store/actions';
import * as XLSX from 'xlsx';

const DashboardAdmin = () => {
  const dispatch = useDispatch();

  const { getAllBugs } = useSelector((state) => state.BugReducer);
  const { getAllUsers } = useSelector((state) => state.AuthReducer);

  // Pending
  const BugPending = (getAllBugs.data || []).filter(
    (item) => item.status === 'Pending'
  );
  const countBugPending = BugPending.length;

  // Progress
  const BugProgress = (getAllBugs.data || []).filter(
    (item) => item.status === 'Progress'
  );
  const countBugProgress = BugProgress.length;

  // Done
  const BugDone = (getAllBugs.data || []).filter(
    (item) => item.status === 'Done'
  );
  const countBugDone = BugDone.length;

  // Decline
  const BugDecline = (getAllBugs.data || []).filter(
    (item) => item.status === 'Decline'
  );
  const countBugDecline = BugDecline.length;

  // User
  const User = (getAllUsers.data || []).filter((item) => item.role === 'user');

  // Admin
  const Admin = (getAllUsers.data || []).filter(
    (item) => item.role === 'admin'
  );

  const handleFecthBugs = () => {
    dispatch(fetchAllBugs());
  };

  const handleFetchUsers = () => {
    dispatch(fetchAllUsers());
  };

  const handleExport = (val) => {
    if (val === 1) {
      const sheet = getAllBugs.data.map((item, index) => ({
        No: index + 1,
        Title: item.title || '-',
        Description: item.description || '-',
        Status: item.status || '-',
      }));

      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(sheet);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'Reporting_Bug.xlsx');
    } else {
      const sheet = getAllUsers.data.map((item, index) => ({
        No: index + 1,
        Email: item.email || '-',
        Role: item.role || '-',
      }));

      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(sheet);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'Reporting_Users.xlsx');
    }
  };

  useEffect(() => {
    handleFecthBugs();
    handleFetchUsers();
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Container fluid className='pt-5'>
        <Row className='mt-3'>
          <Col md={12}>
            <OffcanvasComponent />
          </Col>
        </Row>
        <Row className='mt-5 px-5'>
          <div className='mt-1'>
            <div className='d-flex justify-content-between'>
              <div>
                <p>
                  <b>Bug Reporting</b>
                </p>
              </div>
              <div>
                <Button
                  color='success'
                  onClick={() => {
                    handleExport(1);
                  }}
                >
                  Excel
                </Button>
              </div>
            </div>
            <hr />
          </div>
          {getAllBugs.isLoading ? (
            <Spinner color='red' />
          ) : (
            <>
              <MenuCard
                title={'Count'}
                value={getAllBugs.data.length}
                bgColor={'bg-info'}
              />
              <MenuCard title={'Pending'} value={countBugPending} />
              <MenuCard title={'Progres'} value={countBugProgress} />
              <MenuCard title={'Decline'} value={countBugDone} />
              <MenuCard title={'Done'} value={countBugDecline} />
            </>
          )}

          <div className='mt-4'>
            <div className='d-flex justify-content-between'>
              <div>
                <p>
                  <b>Users</b>
                </p>
              </div>
              <div>
                <Button
                  color='success'
                  onClick={() => {
                    handleExport(2);
                  }}
                >
                  Excel
                </Button>
              </div>
            </div>
            <hr />
          </div>
          {getAllUsers.isLoading ? (
            <Spinner color='red' />
          ) : (
            <>
              <MenuCard
                title={'Count'}
                value={getAllUsers.data.length}
                bgColor={'bg-info'}
              />
              <MenuCard title={'User'} value={User.length} />
              <MenuCard title={'Admin'} value={Admin.length} />
            </>
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default DashboardAdmin;
