/* eslint-disable jsx-a11y/label-has-associated-control */
import './write.css';
import img from '../../assets/article.jpg';

export default function Write() {
  return (
    <section className="write">
      <img src={img} alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus" />
          </label>
          <input type="file" id="fileInput" />
          <input type="text" placeholder="Title" className="writeInput" />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story" type="text" className="writeInput writeText" />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </section>
  );
}
