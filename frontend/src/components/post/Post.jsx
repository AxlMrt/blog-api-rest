import './post.css';
import { NavLink } from 'react-router-dom';

export default function Post({ post }) {
  const PF = `${import.meta.env.VITE_API_URL}/public/images/`;
  return (
    <article className="post">
      {post.img && <img className="postImg" src={PF + post.img} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((cat, idx) => (
            <NavLink to={`?cat=${cat}`} key={idx} className="postCat">
              {cat}
            </NavLink>
            ))
          }
        </div>
        <NavLink className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </NavLink>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </article>
  );
}
