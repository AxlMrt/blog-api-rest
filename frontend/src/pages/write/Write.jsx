import './write.css';
import axios from 'axios';
import { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Write() {
  const titleRef = useRef();
  const descRef = useRef();
  const catRef = useRef();
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(false);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const baseURL = `${import.meta.env.VITE_API_URL}/api/v1`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);

    const newPost = {
      username: user.others.username,
      title: titleRef.current.value,
      desc: descRef.current.value,
      categories: catRef.current.value
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
    }

    try {
      const res = await axios.post(`${baseURL}/posts`, newPost);
      navigate(`/post/${res.data._id}`);
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <section className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus" />
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            className="writeInput"
            ref={titleRef}
            placeholder="Title"
          />
        </div>
        <div className="writeFormGroup">
          <select
            name=""
            className="writeInput writeCat"
            ref={catRef}
            defaultValue="DEFAULT">
            <option value="DEFAULT">-- Select a category --</option>
            <option value="Music">Music</option>
            <option value="Life">Life</option>
            <option value="Sport">Sport</option>
            <option value="Cinema">Cinema</option>
            <option value="Style">Style</option>
            <option value="Tech">Tech</option>
          </select>
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
