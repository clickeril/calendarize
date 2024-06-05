
import Sidebar from '../Sidebar/Sidebar';
import './leave.css';

import { CiCircleQuestion } from "react-icons/ci";

const LeavePage = () => {
  return (
    <div className="leave-layout">
  <Sidebar />
  <div className="leave-container">
    <h2 id='judul'>Booking</h2>
    <p id='desc'>Atur jadwal Anda dengan cepat dan mudah melalui halaman booking.</p>
    
    <div className='leave-card-container'>
      <div className='leave-card input'>
        <h2>Apply Leave</h2>
        <h3>Leave Type</h3>
        <select>
          <option value="">--Select--</option>
          <option value="cuti">Cuti</option>
          <option value="wfh">WFH</option>
        </select>

        <div className="date-inputs">
          <div>
            <h3>From Date</h3>
            <input type="date" placeholder="dd/mm/yyyy" />
          </div>
          <div>
            <h3>To Date</h3>
            <input type="date" placeholder="dd/mm/yyyy" />
          </div>
        </div>

        <h3>Partial Days</h3>
        <select>
          <option value="">--Select--</option>
          <option value="all">All Days</option>
          <option value="start">Start Day Only</option>
          <option value="end">End Day Only</option>
        </select>

        <div className="comment-input">
          <h3>Comment</h3>
          <textarea placeholder="Enter your comment"></textarea>
        </div>
        </div>

        <div className='leave-card submit'>
        <h4>Leave Balance <CiCircleQuestion/></h4>
        <p>Rp. 0 Day(s)</p>

        <div className="button-container">
          <button>Apply</button>
          <button className='clear'>Clear</button>
        </div>
      </div>

    </div>
      <div className='mylist-leave-container'>
        <h2>Mylist Leave</h2>
        {/* <h4>(2) records found</h4> */}
        <div className='leavelist-card'>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="checkAll" />
                </th>
                <th>Date</th>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>Leave Balance (Days)</th>
                <th>Status</th>
                <th>Comments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Mulai baris data di sini */}
              <tr>
                <td><input type="checkbox" /></td>
                <td>2024-02-19</td>
                <td>John Doe</td>
                <td>Cuti</td>
                <td>10</td>
                <td>Approved</td>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <button>Cancel</button>
                </td>
              </tr>

              <tr>
                <td><input type="checkbox" /></td>
                <td>2024-02-19</td>
                <td>John Doe</td>
                <td>Cuti</td>
                <td>10</td>
                <td>Approved</td>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <button>Cancel</button>
                </td>
              </tr>
              {/* Baris data lainnya dapat ditambahkan di sini */}
            </tbody>
          </table>
        </div>
      </div>
  </div>
</div>

  );
};

export default LeavePage;
