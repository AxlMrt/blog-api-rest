/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './write.css';
import axios from 'axios';
import React from 'react';
import { Context } from '../../context/Context';

export default function Write() {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [err, setErr] = React.useState(false);
  const { user } = React.useContext(Context);

  const baseURL = 'http://localhost:3000/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);

    const newPost = {
      username: user.username,
      title,
      desc
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.img = filename;

      try {
        await axios.post(`${baseURL}/uploads`, data);
      } catch (error) {
        setErr(true);
      }

      try {
        const res = await axios.post(`${baseURL}/posts`, newPost);
        window.location.replace('/post/' + res.data._id);
      } catch (error) {
        setErr(true);
      }
    }
  };

  return (
    <section className="write">
      {file && <img src={URL.createObjectURL(file)} alt="" className="writeImg" />}
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus" />
          </label>
          <input type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} />
          <input
            type="text"
            className="writeInput"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Tell your story"
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </section>
  );
}
