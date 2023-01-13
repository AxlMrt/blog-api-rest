/* eslint-disable jsx-a11y/label-has-associated-control */
import './write.css';
import axios from 'axios';
import React from 'react';
import { Context } from '../../context/Context';
import img from '../../assets/article.jpg';

export default function Write() {
  const titleRef = React.useRef();
  const descRef = React.useRef();
  const fileRef = React.useRef(null);
  const { user } = React.useContext(Context);

  const baseURL = 'http://localhost:3000/api/v1';
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseURL}/posts`, {
        username: user.username,
        title: titleRef.current.value,
        desc: descRef.current.value,
        img: descRef.current.file
      });
    } catch (error) {
      console.log(error);
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
          <input type="file" id="fileInput" ref={fileRef} />
          <input type="text" className="writeInput" ref={titleRef} placeholder="Title" />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            className="writeInput writeText"
            ref={descRef}
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
