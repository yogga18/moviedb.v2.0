import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import * as XLSX from 'xlsx';
import utilities from '../../config/function/utilities';
import { toast } from 'react-toastify';

const Summry = ({ data }) => {
  // Additional Variable

  // Func
  const convertDate = (data) => {
    return utilities.convertDate(data, 'DD MMMM YYYY');
  };

  const exportXlsx = () => {
    if (data.length === 0) {
      return toast.warning('Oppss... Data is empty');
    } else {
      const sheet = data.map((item, index) => ({
        No: index + 1,
        Judul: item.title || '-',
        Tanggal_Release: convertDate(item.release_date),
        Rating: item.vote_average || '-',
        Review: item.overview || '-',
      }));

      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(sheet);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'Summry_Movies.xlsx');
    }
  };

  const unduhPdf = () => {
    alert('Unduh PDF');
  };

  return (
    <Fragment>
      <div className='d-flex gap-3 justify-content-end me-5 align-content-center align-baseline'>
        <h5>Summry</h5>
        <Button
          color='success'
          size='sm'
          className='px-4'
          onClick={exportXlsx}
          title='Unduh Summry'
        >
          Excel
        </Button>
        <Button
          color='danger'
          size='sm'
          className='px-4'
          onClick={unduhPdf}
          title='Unduh Summry'
        >
          PDF
        </Button>
      </div>
    </Fragment>
  );
};

Summry.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Summry;
