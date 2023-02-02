import React from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/Sidebar';
import './contact.css';

export default function Contact() {
  const [status, setStatus] = React.useState('Submit');
  const [send, setSend] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value
    };

    try {
      const baseURL = `${import.meta.env.VITE_API_URL}/api/v1`;
      const res = await axios.post(`${baseURL}/contact`, details);
      console.log(res.data);
      setStatus('Submit');
      setSend('true');
    } catch (error) {
      /* Nothing much to add */
    }
  };

  return (
    <section>
      <Header />
      <div className="contact">
        <div className="contactWrapper">
          <form onSubmit={handleSubmit} className="contactForm">
            <div className="contactTitle">
              <h2>Contact me</h2>
              <p>
                Any idea to improve the blog or you want to work with me ?
                Let me know !
              </p>
            </div>
            <div className="contactInfos">
              <label>Name</label>
              <input
                type="text"
                id="name"
                className="contactInput"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="contactInfos">
              <label>Email</label>
              <input
                type="email"
                id="email"
                className="contactInput"
                placeholder="Enter you email"
                required
              />
            </div>
            <div className="contactInfos">
              <label>Message</label>
              <textarea
                id="message"
                className="contactInput"
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="contactBtn">
              {status}
            </button>
            {send && <span className="success">Message sent</span>}
          </form>
        </div>
        <SideBar />
      </div>
    </section>
  );
}
