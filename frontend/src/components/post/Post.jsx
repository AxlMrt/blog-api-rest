import './post.css'
import imageArt from '../../assets/article.jpg'

export default function Post() {
  return (
    <article className='post'>
      <img
        className='postImg'
        src={ imageArt }
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum</span>
        <hr/>
        <span className="postDate">1h ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid repellendus expedita in id. Qui atque, possimus quibusdam itaque corporis impedit sed quo culpa eum aspernatur explicabo asperiores cumque quas dolore.</p>
    </article>
  )
}
