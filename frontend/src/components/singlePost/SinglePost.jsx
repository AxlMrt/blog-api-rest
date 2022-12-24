import './singlePost.css'
import img from '../../assets/article.jpg'

export default function SinglePost() {
  return (
    <article className='singlePost'>
      <div className="singlePostWrapper">
        <img src={ img } alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Autor: <b>Name</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
          <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint aliquid laudantium voluptate in consequuntur neque, cupiditate ad nam labore ea animi temporibus explicabo provident quae voluptatibus illum quod, hic enim.</p>
      </div>
    </article>
  )
}
