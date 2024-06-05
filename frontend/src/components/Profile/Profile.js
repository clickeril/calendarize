import Sidebar from '../Sidebar/Sidebar';
import './profile.css';

const ProfilePage = () => {

  return (
    <div className="profile-layout">
      <div className="profile-container">
        <Sidebar />
        <div className="profile-content">
          <h2 id='judul'>Profile</h2>
          <p id='desc'>Selamat datang di halaman profile!</p>

          <div className='profile-card-container'>
            <div className="profile-card">
              <img src="https://via.placeholder.com/500" alt="Profile" />
              <h3>Jane Doe</h3>
              <p>Email: jane@example.com</p>
              <p>Location: New York, USA</p>
              <p>Occupation: Software Engineer</p>
              <p>Interests: Web development, hiking, photography</p>
              <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi a lorem suscipit cursus. Nunc eleifend risus ut massa vestibulum, eget fringilla quam eleifend.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
