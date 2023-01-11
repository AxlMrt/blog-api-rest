/* eslint-disable prefer-template */
import './singlePost.css';
import { useLocation, NavLink } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function SinglePost() {
  const baseURL = 'http://localhost:3000/api/v1';
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${baseURL}/posts/` + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <article className="singlePost">
      <div className="singlePostWrapper">
        {post.img && <img src={post.img} alt="" className="singlePostImg" />}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square" />
            <i className="singlePostIcon fa-regular fa-trash-can" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor:
            <NavLink className="link" to={`/?user=${post.username}`}>
              <b> {post.username}</b>
            </NavLink>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </article>
  );
}
