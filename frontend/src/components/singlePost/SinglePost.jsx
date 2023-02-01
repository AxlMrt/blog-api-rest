import './singlePost.css';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/Context';

export default function SinglePost() {
  const baseURL = `${import.meta.env.VITE_API_URL}/api/v1`;
  const PF = `${import.meta.env.VITE_API_URL}/public/images`;

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { user } = useContext(Context);
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${baseURL}/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [baseURL, path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/posts/${path}`, {
        data: { username: user.others.username },
        headers: { authorization: `Bearer ${user.accessToken}` }
      });
      navigate('/');
    } catch (error) {
      /* empty, nothing much to add */
    }
  };

  const handleUpdate = async () => {
    const config = {
      username: user.others.username,
      title,
      desc
    };

    try {
      await axios.put(`${baseURL}/posts/${path}`, config, {
        headers: { authorization: `Bearer ${user.accessToken}` }
      });
      setUpdateMode(false);
    } catch (error) {
      /* empty, nothing much to add */
    }
  };

  return (
    <article className="singlePost">
      <div className="singlePostWrapper">
        {post.img && (
          <img
            src={`${PF}/${post.img}`}
            alt=""
            className="singlePostImg"
          />
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
            {post.username === user?.others.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                />
                <i
                  className="singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                />
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
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
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
          <button
            type="button"
            className="singlePostBtn"
            onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </article>
  );
}
