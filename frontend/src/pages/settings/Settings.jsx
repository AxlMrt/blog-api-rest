import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import profil from '../../assets/profil.jpg'

export default function Settings() {
  return (
    <section className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profil Picture</label>
          <div className="settingsPP">
            <img src={profil} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' />
          </div>
          <label>Username</label>
          <input type="text" placeholder='yourname'/>
          <label>Email</label>
          <input type="email" placeholder='Email@gmail.com'/>
          <label>password</label>
          <input type="password"/>
          <button type="submit" className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </section>
  )
}
