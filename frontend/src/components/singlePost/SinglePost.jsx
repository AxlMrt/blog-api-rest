/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-template */
import './singlePost.css';
import { useLocation, NavLink } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { Context } from '../../context/Context';

export default function SinglePost() {
  const baseURL = 'http://localhost:3000';
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { user } = React.useContext(Context);
  const [post, setPost] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [updateMode, setUpdateMode] = React.useState(false);

  React.useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${baseURL}/api/v1/posts/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/api/v1/posts/` + path, { data: { username: user.username } });
      window.location.replace('/');
    } catch (error) {
      /* empty, nothing much to add */
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${baseURL}/api/v1/posts/` + path, { username: user.username, title, desc });
      setUpdateMode(false);
    } catch (error) {
      /* empty, nothing much to add */
    }
  };

  return (
    <article className="singlePost">
      <div className="singlePostWrapper">
        {post.img && (
          <img src={`${baseURL}/public/images/${post.img}`} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                />
                <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete} />
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor:
            <NavLink className="link" to={`/?user=${post.username}`}>
              <b> {post.username}</b>
            </NavLink>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button type="button" className="singlePostBtn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </article>
  );
}
