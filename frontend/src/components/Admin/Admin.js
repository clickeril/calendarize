import Sidebar from '../Sidebar/Sidebar';
import './admin.css';

import { CiCircleQuestion } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const DashboardPage = () => {

  return (
    <div className="admin-layout">
      <div className="admin-container">
        <Sidebar />
        <div className="admin-content">
          <h2 id='judul'>Admin</h2>
          <p id='desc'>Selamat datang di halaman Admin!</p>

          <div className='adminlist-leave-container'>
            {/* <h2>Adminlist Leave</h2> */}
            <h4>(2) records found</h4>
            <div className='adminlist-card'> {/* Mengubah leavelist-card menjadi adminlist-card */}
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
                      <button class='approve'><FaCheck/></button>
                      <button class='reject'><IoClose/></button>
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
                        <button class='approve'><FaCheck/></button>
                        <button class='reject'><IoClose/></button>
                    </td>
                </tr>

                  {/* Baris data lainnya dapat ditambahkan di sini */}
                </tbody>
              </table>
            </div>
          </div>

          <div className='leave-card-container'>
            <div className='leave-card input'>
              <h2>Asign Leave</h2>
              <h3>Employee Name</h3>
              <input type='text' placeholder="Type for hints..."/>
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
              <h4>Confirm <CiCircleQuestion/></h4>
              <p>Leave assignment</p>

              <div className="button-container">
                <button>Apply</button>
                <button className='clear'>Clear</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
