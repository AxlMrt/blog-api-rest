/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import './post.css';
import { NavLink } from 'react-router-dom';

export default function Post({ post }) {
  const PF = 'http://localhost:3000/public/images/';
  return (
    <article className="post">
      {post.img && <img className="postImg" src={PF + post.img} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat, idx) => (
            <span key={idx} className="postCat">
              {cat}
            </span>
          ))}
        </div>
        <NavLink className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </NavLink>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </article>
  );
}
