/* eslint-disable jsx-a11y/label-has-associated-control */
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import profile from '../../assets/profil.jpg';

export default function Settings() {
  return (
    <section className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={profile} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user" />
            </label>
            <input type="file" id="fileInput" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="yourname" />
          <label>Email</label>
          <input type="email" placeholder="Email@gmail.com" />
          <label>password</label>
          <input type="password" />
          <button type="submit" className="settingsSubmit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </section>
  );
}
