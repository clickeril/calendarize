import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './dashboard.css';
import { IoTime } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import Calendar from '../Calendar/Calendar';

const DashboardPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  // const [leaveEvents, setLeaveEvents] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(timer); // Cleanup
  }, []);

  // Data dummy
  const employeeData = [
    { name: 'John Doe', division: 'IT Support' },
    { name: 'Jane Smith', division: 'Marketing' },
    { name: 'Alice Johnson', division: 'Finance' }
  ];

  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h2 id='judul'>Dashboard</h2>
          <p id='desc'>Selamat datang di halaman dashboard!</p>

          <div className="card-container">
            {/* Card 1 */}
            <div className="card">
              <h3>{employeeData[0].name}</h3>
              <p>{employeeData[0].division}</p>
            </div>
            {/* Card 2 */}
            <div className="card">
              <h3>Jadwal Anda</h3>
              <p>menampilkan jadwal cuti atau wfh terdekat</p>
            </div>
            {/* Card 3 */}
            <div className="card time">
              <p>{currentTime.toLocaleTimeString()}</p>
              <p><IoTime className='icon-time'/></p>
            </div>
          </div>

          {/* Card 4 - Calendar */}
          <div className='calendar'>
            <h3><FaBookmark/> Booking Karyawan</h3>
            <p>List karyawan yang telah booking tanggal WFH atau cuti</p>
            <Calendar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
