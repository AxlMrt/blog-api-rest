/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './settings.css';
import React from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import Profile from '../../assets/profil.jpg';

export default function Settings() {
  const { user, dispatch } = React.useContext(Context);
  const [file, setFile] = React.useState(null);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const baseURL = 'http://localhost:3000/api/v1';
  const PF = 'http://localhost:3000/public/images/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });

    const updatedUser = {
      userId: user.others._id,
      username,
      email,
      password
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;

      try {
        await axios.post(`${baseURL}/uploads`, data);
      } catch (error) {
        /* empty */
      }
    }

    try {
      const res = await axios.put(
        `${baseURL}/users/${user.others._id}`,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/users/${user.others._id}`, {
        data: {
          userId: user.others._id,
          isAdmin: user.others.isAdmin
        },
        headers: { authorization: `Bearer ${user.accessToken}` }
      });
      window.location.replace('/');
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      /* empty, nothing much to add */
      console.log(error);
    }
  };

  return (
    <section className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            Delete your account
          </span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {user.profilePic ? (
              <img
                src={
                  file ? URL.createObjectURL(file) : PF + user.profilePic
                }
                alt=""
              />
            ) : (
              <img
                src={file ? URL.createObjectURL(file) : Profile}
                alt=""
              />
            )}

            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user" />
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="settingsSubmit">
            Update
          </button>
          {success && (
            <span className="success">Profile has been updated.</span>
          )}
        </form>
      </div>
      <Sidebar />
    </section>
  );
}
