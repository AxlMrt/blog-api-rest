/* eslint-disable jsx-a11y/label-has-associated-control */
import './write.css';
import axios from 'axios';
import React from 'react';
import { Context } from '../../context/Context';
import img from '../../assets/article.jpg';

export default function Write() {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [err, setErr] = React.useState(false);
  const { user } = React.useContext(Context);

  const baseURL = 'http://localhost:3000/api/v1';
  const createPost = async (e) => {
    e.preventDefault();
    setErr(false);

    try {
      const res = await axios.post(`${baseURL}/posts`, {
        user,
        title,
        desc,
        file
      });
    } catch (error) {
      setErr(true);
    }
  };

  React.useEffect(() => {
    createPost();
  });
  return (
    <section className="write">
      <img src={img} alt="" className="writeImg" />
      <form action="" className="writeForm" onSubmit={createPost}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus" />
          </label>
          <input type="file" id="fileInput" />
          <input type="text" className="writeInput" placeholder="Title" />
        </div>
        <div className="writeFormGroup">
          <textarea type="text" className="writeInput writeText" placeholder="Tell your story" />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </section>
  );
}
